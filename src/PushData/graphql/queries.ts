// tslint:disable
// this is an auto generated file. This will be overwritten

export const getByEventId = `query GetByEventId(
  $filter: EventsIdFilterInput!
  $limit: Int!
  $nextToken: String
) {
  getByEventId(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getByEventKey = `query GetByEventKey(
  $filter: EventsKeyFilterInput!
  $limit: Int!
  $nextToken: String
) {
  getByEventKey(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getByEventType = `query GetByEventType(
  $filter: EventsTypeFilterInput!
  $limit: Int!
  $nextToken: String
) {
  getByEventType(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getByEventDomain = `query GetByEventDomain(
  $filter: EventsDomainFilterInput!
  $limit: Int!
  $nextToken: String
) {
  getByEventDomain(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getByEmitterId = `query GetByEmitterId(
  $filter: EmitterIdFilterInput!
  $limit: Int!
  $nextToken: String
) {
  getByEmitterId(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const listAllEvents = `query ListAllEvents($limit: Int, $nextToken: String) {
  listAllEvents(limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getByIds = `query GetByIds($ids: [String!]) {
  getByIds(ids: $ids) {
    items {
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
    nextToken
  }
}
`;
export const getById = `query GetById($id: String!) {
  getById(id: $id) {
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
