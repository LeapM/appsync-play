/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  eventDomain: string,
  eventType: string,
  sequence: string,
  eventId: string,
  eventKey: string,
  version: string,
  origin: string,
  producer: string,
  producerVersion: string,
  emitterId: string,
  emitterTimestamp: string,
  consumerTimestamp: string,
  data: string,
};

export type EventsIdFilterInput = {
  eventId?: StringFilterInput | null,
};

export type StringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type EventsKeyFilterInput = {
  eventKey?: StringFilterInput | null,
};

export type EventsTypeFilterInput = {
  eventType?: StringFilterInput | null,
};

export type EventsDomainFilterInput = {
  eventDomain?: StringFilterInput | null,
};

export type EmitterIdFilterInput = {
  emitterId?: StringFilterInput | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type CreateEventsMutationVariables = {
  events?: Array< CreateEventInput > | null,
};

export type CreateEventsMutation = {
  createEvents:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type GetByEventIdQueryVariables = {
  filter: EventsIdFilterInput,
  limit: number,
  nextToken?: string | null,
};

export type GetByEventIdQuery = {
  getByEventId:  {
    __typename: "EventsConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventDomain: string | null,
      eventType: string | null,
      sequence: string | null,
      eventId: string,
      eventKey: string,
      version: string | null,
      origin: string | null,
      producer: string | null,
      producerVersion: string | null,
      emitterId: string | null,
      emitterTimestamp: string | null,
      consumerTimestamp: string | null,
      created: string,
      data: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetByEventKeyQueryVariables = {
  filter: EventsKeyFilterInput,
  limit: number,
  nextToken?: string | null,
};

export type GetByEventKeyQuery = {
  getByEventKey:  {
    __typename: "EventsConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventDomain: string | null,
      eventType: string | null,
      sequence: string | null,
      eventId: string,
      eventKey: string,
      version: string | null,
      origin: string | null,
      producer: string | null,
      producerVersion: string | null,
      emitterId: string | null,
      emitterTimestamp: string | null,
      consumerTimestamp: string | null,
      created: string,
      data: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetByEventTypeQueryVariables = {
  filter: EventsTypeFilterInput,
  limit: number,
  nextToken?: string | null,
};

export type GetByEventTypeQuery = {
  getByEventType:  {
    __typename: "EventsConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventDomain: string | null,
      eventType: string | null,
      sequence: string | null,
      eventId: string,
      eventKey: string,
      version: string | null,
      origin: string | null,
      producer: string | null,
      producerVersion: string | null,
      emitterId: string | null,
      emitterTimestamp: string | null,
      consumerTimestamp: string | null,
      created: string,
      data: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetByEventDomainQueryVariables = {
  filter: EventsDomainFilterInput,
  limit: number,
  nextToken?: string | null,
};

export type GetByEventDomainQuery = {
  getByEventDomain:  {
    __typename: "EventsConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventDomain: string | null,
      eventType: string | null,
      sequence: string | null,
      eventId: string,
      eventKey: string,
      version: string | null,
      origin: string | null,
      producer: string | null,
      producerVersion: string | null,
      emitterId: string | null,
      emitterTimestamp: string | null,
      consumerTimestamp: string | null,
      created: string,
      data: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetByEmitterIdQueryVariables = {
  filter: EmitterIdFilterInput,
  limit: number,
  nextToken?: string | null,
};

export type GetByEmitterIdQuery = {
  getByEmitterId:  {
    __typename: "EventsConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventDomain: string | null,
      eventType: string | null,
      sequence: string | null,
      eventId: string,
      eventKey: string,
      version: string | null,
      origin: string | null,
      producer: string | null,
      producerVersion: string | null,
      emitterId: string | null,
      emitterTimestamp: string | null,
      consumerTimestamp: string | null,
      created: string,
      data: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListAllEventsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllEventsQuery = {
  listAllEvents:  {
    __typename: "EventsConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventDomain: string | null,
      eventType: string | null,
      sequence: string | null,
      eventId: string,
      eventKey: string,
      version: string | null,
      origin: string | null,
      producer: string | null,
      producerVersion: string | null,
      emitterId: string | null,
      emitterTimestamp: string | null,
      consumerTimestamp: string | null,
      created: string,
      data: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetByIdsQueryVariables = {
  ids?: Array< string > | null,
};

export type GetByIdsQuery = {
  getByIds:  {
    __typename: "EventsConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      eventDomain: string | null,
      eventType: string | null,
      sequence: string | null,
      eventId: string,
      eventKey: string,
      version: string | null,
      origin: string | null,
      producer: string | null,
      producerVersion: string | null,
      emitterId: string | null,
      emitterTimestamp: string | null,
      consumerTimestamp: string | null,
      created: string,
      data: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetByIdQueryVariables = {
  id: string,
};

export type GetByIdQuery = {
  getById:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type OnEventDomainChangeSubscriptionVariables = {
  eventDomain?: string | null,
};

export type OnEventDomainChangeSubscription = {
  onEventDomainChange:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type OnEventDomainChangesSubscriptionVariables = {
  eventDomain?: string | null,
};

export type OnEventDomainChangesSubscription = {
  onEventDomainChanges:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type OnEventDomainTypeChangeSubscriptionVariables = {
  eventDomain: string,
  eventType: string,
};

export type OnEventDomainTypeChangeSubscription = {
  onEventDomainTypeChange:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type OnEventDomainTypeChangesSubscriptionVariables = {
  eventDomain: string,
  eventType?: Array< string > | null,
};

export type OnEventDomainTypeChangesSubscription = {
  onEventDomainTypeChanges:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type OnEventDomainKeyChangeSubscriptionVariables = {
  eventDomain: string,
  eventKey: string,
};

export type OnEventDomainKeyChangeSubscription = {
  onEventDomainKeyChange:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type OnEventDomainKeyChangesSubscriptionVariables = {
  eventDomain: string,
  eventKey: string,
};

export type OnEventDomainKeyChangesSubscription = {
  onEventDomainKeyChanges:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type OnEventDomainEventIdChangeSubscriptionVariables = {
  eventDomain: string,
  eventId: string,
};

export type OnEventDomainEventIdChangeSubscription = {
  onEventDomainEventIdChange:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};

export type OnEventDomainEventIdChangesSubscriptionVariables = {
  eventDomain: string,
  eventId?: Array< string > | null,
};

export type OnEventDomainEventIdChangesSubscription = {
  onEventDomainEventIdChanges:  {
    __typename: "Event",
    id: string,
    eventDomain: string | null,
    eventType: string | null,
    sequence: string | null,
    eventId: string,
    eventKey: string,
    version: string | null,
    origin: string | null,
    producer: string | null,
    producerVersion: string | null,
    emitterId: string | null,
    emitterTimestamp: string | null,
    consumerTimestamp: string | null,
    created: string,
    data: string | null,
  } | null,
};
