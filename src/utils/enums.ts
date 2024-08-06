// @todo - these probably should be ints so they
// are not so big when serialized
export enum EntityType {
  Game = 'game',
  Player = 'player',
  Card = 'card',
}

export enum Class {
  Mage = 'mage',
}

export enum GameState {
  Connected = 'connected',
  Loaded = 'loaded',
  Finished = 'finished',
}

export type Entity = {
  [key in GameTag]: unknown;
}

export enum GameTag {
  Id = 'id',
  GameState = 'state',
  Health = 'health',
  Type = 'type',
  Class = 'class',
}

export enum BlockActionType {
  BlockStart = 'blockStart',
  BlockEnd = 'blockEnd',
  FullEntity = 'fullEntity',
  TagChange = 'tagChange',
}
