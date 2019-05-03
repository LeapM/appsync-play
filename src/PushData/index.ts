import initClient from './client'
import gql from 'graphql-tag'
import ZenObservable from 'zen-observable-ts'
import { onEventDomainChange } from './graphql/subscriptions'
import { Observable } from 'apollo-client/util/Observable'

interface MakeObservableReq {
  eventDomain?: string
  eventType?: string
  eventId?: string
}

interface SubscriptionMeta<T> {
  subscription: ZenObservable.Subscription
  children: ZenObservable.Subscription[]
  observer: ZenObservable.Observer<T>
}
export class AppSyncObservable<T> {
  private nativeObservable: ZenObservable<T>
  private subscriptions: SubscriptionMeta<T>[] = []
  private creator: Function

  constructor(creator: Function) {
    this.creator = creator
    this.nativeObservable = creator()
  }

  private resubscribe() {
    console.log('call resubcript')
    this.nativeObservable = this.creator()
    this.subscriptions.forEach(sub => this.buildSubscription(sub.observer))
  }

  private decorateObserverWithErrorHandler<T>(
    observer: ZenObservable.Observer<T>
  ) {
    return {
      ...observer,
      error: (err: any) => {
        console.error('error happend with network')
        if (err === 'disconnect') {
          this.resubscribe()
        } else if (observer.error) {
          observer.error(err)
        }
      },
    }
  }

  public subscribe(
    observerOrNext: ((value: T) => void) | ZenObservable.Observer<T>,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    let observer =
      observerOrNext instanceof Function
        ? {
            next: observerOrNext,
            error,
            complete,
          }
        : observerOrNext
    let subscription = this.buildSubscription(observer)
    this.subscriptions.push({
      subscription,
      children: [],
      observer,
    })

    console.log(this.subscriptions)

    return subscription
  }

  private buildSubscription(observer: ZenObservable.Observer<T>) {
    // tslint:disable-next-line:no-console

    observer = this.decorateObserverWithErrorHandler(observer)
    const nativeSubscription = this.nativeObservable.subscribe(observer)
    const nativeUnsubscribe = nativeSubscription.unsubscribe
    nativeSubscription.unsubscribe = () => {
      const index = this.subscriptions.findIndex(
        v => v.subscription == nativeSubscription
      )
      if (index >= 0) {
        console.log('find cached subscription', this.subscriptions[0])
        this.subscriptions[index].children.forEach(c => c.unsubscribe())
        this.subscriptions.splice(index, 1)
      }

      if (this.subscriptions.length == 0) console.log('unsubscribe event')
      nativeUnsubscribe.apply(nativeSubscription)
    }

    return nativeSubscription
  }
}

function createFailedObs<T>(error: any) {
  return new AppSyncObservable<T>(
    () => new Observable<T>(observer => observer.error(error))
  )
}

function makeObservable<T>(
  req: MakeObservableReq
): Promise<AppSyncObservable<T>> {
  // Add logic to support other subscription
  const { eventDomain, eventType, eventId } = req
  return initClient()
    .then(client => {
      let creator = () => {
        let obs = client!.subscribe({
          query: gql(onEventDomainChange),
          variables: { eventDomain },
        })
        return obs.map<T>(val => val.data)
      }
      return new AppSyncObservable<T>(creator)
    })
    .catch(error => {
      return createFailedObs<T>(error)
    })
}

export default makeObservable
