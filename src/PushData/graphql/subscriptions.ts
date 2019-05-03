// tslint:disable
// this is an auto generated file. This will be overwritten

export const onEventDomainChange = `subscription OnEventDomainChange($eventDomain: String) {
  onEventDomainChange(eventDomain: $eventDomain) {
    id
    eventDomain
    eventType
    sequence
    eventId
    eventKey
    version
    origin
    producer
    producerVersion
    emitterId
    emitterTimestamp
    consumerTimestamp
    created
    data
  }
}
`;
export const onEventDomainChanges = `subscription OnEventDomainChanges($eventDomain: String) {
  onEventDomainChanges(eventDomain: $eventDomain) {
    id
    eventDomain
    eventType
    sequence
    eventId
    eventKey
    version
    origin
    producer
    producerVersion
    emitterId
    emitterTimestamp
    consumerTimestamp
    created
    data
  }
}
`;
export const onEventDomainTypeChange = `subscription OnEventDomainTypeChange(
  $eventDomain: String!
  $eventType: String!
) {
  onEventDomainTypeChange(eventDomain: $eventDomain, eventType: $eventType) {
    id
    eventDomain
    eventType
    sequence
    eventId
    eventKey
    version
    origin
    producer
    producerVersion
    emitterId
    emitterTimestamp
    consumerTimestamp
    created
    data
  }
}
`;
export const onEventDomainTypeChanges = `subscription OnEventDomainTypeChanges(
  $eventDomain: String!
  $eventType: [String!]
) {
  onEventDomainTypeChanges(eventDomain: $eventDomain, eventType: $eventType) {
    id
    eventDomain
    eventType
    sequence
    eventId
    eventKey
    version
    origin
    producer
    producerVersion
    emitterId
    emitterTimestamp
    consumerTimestamp
    created
    data
  }
}
`;
export const onEventDomainKeyChange = `subscription OnEventDomainKeyChange($eventDomain: String!, $eventKey: String!) {
  onEventDomainKeyChange(eventDomain: $eventDomain, eventKey: $eventKey) {
    id
    eventDomain
    eventType
    sequence
    eventId
    eventKey
    version
    origin
    producer
    producerVersion
    emitterId
    emitterTimestamp
    consumerTimestamp
    created
    data
  }
}
`;
export const onEventDomainKeyChanges = `subscription OnEventDomainKeyChanges(
  $eventDomain: String!
  $eventKey: String!
) {
  onEventDomainKeyChanges(eventDomain: $eventDomain, eventKey: $eventKey) {
    id
    eventDomain
    eventType
    sequence
    eventId
    eventKey
    version
    origin
    producer
    producerVersion
    emitterId
    emitterTimestamp
    consumerTimestamp
    created
    data
  }
}
`;
export const onEventDomainEventIdChange = `subscription OnEventDomainEventIdChange(
  $eventDomain: String!
  $eventId: String!
) {
  onEventDomainEventIdChange(eventDomain: $eventDomain, eventId: $eventId) {
    id
    eventDomain
    eventType
    sequence
    eventId
    eventKey
    version
    origin
    producer
    producerVersion
    emitterId
    emitterTimestamp
    consumerTimestamp
    created
    data
  }
}
`;
export const onEventDomainEventIdChanges = `subscription OnEventDomainEventIdChanges(
  $eventDomain: String!
  $eventId: [String!]
) {
  onEventDomainEventIdChanges(eventDomain: $eventDomain, eventId: $eventId) {
    id
    eventDomain
    eventType
    sequence
    eventId
    eventKey
    version
    origin
    producer
    producerVersion
    emitterId
    emitterTimestamp
    consumerTimestamp
    created
    data
  }
}
`;
