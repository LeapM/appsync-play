import initClient from './client'
import gql from 'graphql-tag'
import ZenObservable from 'zen-observable-ts'
import { onEventDomainChange } from './graphql/subscriptions'
import { Observable } from 'apollo-client/util/Observable'
import { Subject } from 'rxjs'
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
function createFailedObs<T>(error: any) {
  let obs = new Observable<T>(observer => observer.error(error))
  return obs
  // return createRxSubjectFromZenObservable<T>(obs)
}

function createRxSubjectFromZenObservable<T>(
  obs: ZenObservable<T>
): Subject<T> {
  let subject = new Subject<T>()
  debugger
  obs.subscribe(subject)
  return subject
}

function decorateObserverWithReconnectHandler<T>(
  observer: ZenObservable.Observer<T>,
  creator: Function,
  subscriptions: ZenObservable.Subscription[]
) {
  return {
    ...observer,
    error: (err: any) => {
      console.error('error happend with network', err)
      if (err.errorMessage == 'AMQJSC0000I OK.') {
        setTimeout(() => {
          let obs = decorateObservable<T>(creator)
          subscriptions.push(obs.subscribe(observer))
        }, 1000)
      } else if (observer.error) {
        observer.error(err)
      }
    },
  }
}

function decorateObservable<T>(creator: Function): ZenObservable<T> {
  let obs = creator()
  let nativeSubscribe = obs.subscribe
  let subscribe = function(
    observerOrNext: ((value: T) => void) | ZenObservable.Observer<T>,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    let observer =
      typeof observerOrNext == 'function'
        ? {
            next: observerOrNext,
            error,
            complete,
          }
        : observerOrNext
    let shaddowSubscriptions: ZenObservable.Subscription[] = []
    observer = decorateObserverWithReconnectHandler(
      observer,
      creator,
      shaddowSubscriptions
    )
    const nativeSubscription = nativeSubscribe.apply(obs, [observer])
    const nativeUnsubscribe = nativeSubscription.unsubscribe

    nativeSubscription.unsubscribe = () => {
      console.log('call unsubscribe')
      shaddowSubscriptions.forEach(s => {
        console.log('call children subscribe')
        s.unsubscribe()
      })
      shaddowSubscriptions = []
      nativeUnsubscribe.apply(nativeSubscription)
    }
    return nativeSubscription
  }

  obs.subscribe = subscribe
  return obs
}

function makeObservable<T>(req: MakeObservableReq): Promise<ZenObservable<T>> {
  // Add logic to support other subscription
  const { eventDomain, eventType, eventId } = req
  return initClient()
    .then(client => {
      let creator = () => {
        let obs = client!.subscribe({
          query: gql(onEventDomainChange),
          variables: { eventDomain },
        })
        return obs
      }
      let obs = decorateObservable<{ data: T }>(creator)
      let newObs = obs.map<T>(val => val.data)
      return newObs
      //return createRxSubjectFromZenObservable<T>(newObs)
    })
    .catch(error => {
      return createFailedObs<T>(error)
    })
}

export default makeObservable
