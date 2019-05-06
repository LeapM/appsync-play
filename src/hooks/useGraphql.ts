import { useState, useEffect } from 'react'
import makeObservable from '../PushData'
import { OnEventDomainChangeSubscription as DomainChangeEvent } from '../PushData/API'
import Observable from 'zen-observable-ts'
import { OnEventDomainChangeSubscription as DomainEvent } from '../PushData/API'
let subscriber: any = null
export default () => {
  let [event, setEvent] = useState<any>('start')
  console.log('initial useGraph')
  let subscribe = (eventDomain: string) => {}
  let kill = () => {
    (window as any).mqttClient.disconnect()
  }
  let unsubscribe = () => {
    console.log('calling unsubscribe')
    if (subscriber) {
      subscriber.unsubscribe()
      subscriber = null
    }
  }

  useEffect(() => {
    console.log('call use effect')
    console.log('calling subscribe')
    makeObservable<DomainEvent>({ eventDomain: 'race' }).then(obs => {
      subscriber = obs.subscribe(
        data => {
          console.log(data)
          setEvent(data)
        },
        error => {
          console.log('error', error)
          setEvent("network error" + error.toString())
        },
        () => console.log('completed')
      )
    })
    setTimeout(() => setEvent('2 second passed'), 2000)
  }, [])
  return { event, subscribe, unsubscribe, kill }
}
