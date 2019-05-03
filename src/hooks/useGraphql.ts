import { useState, useEffect } from 'react'
import makeObservable from '../PushData'
import { OnEventDomainChangeSubscription as DomainChangeEvent } from '../PushData/API'
import Observable from 'zen-observable-ts'
import { OnEventDomainChangeSubscription as DomainEvent } from '../PushData/API'
export default () => {
  let [event, setEvent] = useState()
  let subscriber: any = null
  // useEffect(() => {
  //   let newEvent = event
  //   let interval = setInterval(() => {
  //     newEvent++
  //     setEvent(newEvent)
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])
  let subscribe = (eventDomain: string) => {
    console.log('calling subscribe')
    makeObservable<DomainEvent>({ eventDomain }).then(obs => {
      subscriber = obs.subscribe(
        data => {
          console.log(data)
          setEvent(data)
        },
        error => console.log('error', error),
        () => console.log('completed')
      )
    })
  }
  let kill = () => {
    console.log('calling kill') 
    subscriber && subscriber.close()
  }
  let unsubscribe = () => {
    console.log('calling unsubscribe')
    if (subscriber) {
      subscriber.unsubscribe()
      subscriber = null
    }
  }
  return { event, subscribe, unsubscribe, kill }
}
