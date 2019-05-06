import initClient from './client'
import gql from 'graphql-tag'
import ZenObservable from 'zen-observable-ts'
import { onEventDomainChange } from './graphql/subscriptions'
import { Observable } from 'apollo-client/util/Observable'
import * as Rx from 'rx'
import { string } from 'prop-types'
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

interface ConnectionState {
  subscriptionCount: number
  nativeSubscription: ZenObservable.Subscription | null
}
function createFailedObs<T>(error: any) {
  let obs = new Observable<T>(observer => observer.error(error))
  return obs
  // return createRxSubjectFromZenObservable<T>(obs)
}

function subscribeToSubject<T>(
  subject: Rx.Subject<T>,
  creator: () => ZenObservable<T>,
  currentState: ConnectionState
) {
  let obs = creator()
  let nativeSubscription = obs.subscribe(
    data => {
      subject.onNext(data)
    },
    error => {
      nativeSubscription.unsubscribe()
      subscribeToSubject(subject, creator, currentState)
    },
    () => subject.onCompleted()
  )

  currentState.nativeSubscription = nativeSubscription
}
function decorateObservable<T>(creator: () => ZenObservable<T>): Rx.Subject<T> {
  let subject = new Rx.Subject<T>()
  let currentState: ConnectionState = {
    subscriptionCount: 0,
    nativeSubscription: null
  }
  subscribeToSubject(subject, creator, currentState)

  let subjectSubscribe = subject.subscribe.bind(subject)
  subject.subscribe = function(x: any): any {
    currentState.subscriptionCount += 1
    subjectSubscribe()
  }
  let subjectDispose = subject.dispose.bind(subject)
  subject.dispose = () => {
    currentState.subscriptionCount -= 1
    if (currentState.subscriptionCount < 1) {
      currentState.nativeSubscription!.unsubscribe()
    }
    subjectDispose()
  }
  return subject
}

function makeObservable<T>(req: MakeObservableReq): Promise<Rx.Subject<T>> {
  // Add logic to support other subscription
  const { eventDomain, eventType, eventId } = req
  return initClient().then(client => {
    let creator: () => ZenObservable<T> = () => {
      let obs = client!.subscribe({
        query: gql(onEventDomainChange),
        variables: { eventDomain }
      })
      return obs
    }

    return decorateObservable<T>(creator)
    //return createRxSubjectFromZenObservable<T>(newObs)
  })
}

export default makeObservable
