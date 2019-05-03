import React from 'react'
import makeObservable from '../PushData/index'
import useGraphql from '../hooks/useGraphql'

const EventSubscription: React.FC = props => {
  let { event, subscribe, unsubscribe, kill} = useGraphql()
  return (
    <div>
      <h1>AppSync network connection testing</h1>
      <div>
        <button onClick={() => subscribe('race')}>Subscribe</button>
      </div>
      <div>
        <button onClick = {unsubscribe}>Unsubscribe</button>{' '}
      </div>
      <div>
        <button onClick = {kill}>  Kill connection</button>
      </div>
    </div>
  )
}

export default EventSubscription
