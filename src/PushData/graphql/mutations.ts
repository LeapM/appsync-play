// tslint:disable
// this is an auto generated file. This will be overwritten

export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const createEvents = `mutation CreateEvents($events: [CreateEventInput!]) {
  createEvents(events: $events) {
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
