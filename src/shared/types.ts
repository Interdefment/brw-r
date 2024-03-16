export enum CardType {
  Spell = 'spell',
  Evocation = 'evocation',
  Quest = 'quest',
  Event = 'event',
  Upgrade = 'upgrade',
  Jinx = 'jinx',
  Equipement = 'equipement',
  AvatarCommand = 'avatar-command',
}

export interface BaseCard<T extends CardType> {
  type: T;
  name: string;
  image?: string;
  description?: string;
}

export enum EffectTargetType {
  Self,
  Mage,
  Evocation,
  Model,
  Room,
  Special,
}

export interface EffectTarget {
  type: EffectTargetType;
  distance?: number;
}

export enum MoonPhase {
  First,
  Seconds,
  Third,
}

export interface Path {
  label: string;
  path: string;
  generatePath: () => string;
}

// export interface EvocationCard extends BaseCard<CardType.Evocation> {
//   health: number;
//   damage: number;
//   movement: number;
//   description?: string;
// }

// export interface EventCard extends BaseCard<CardType.Event> {
//   phase: MoonPhase;
//   enterPoints: number;
//   exitPoints: number;
//   diescription: string;
//   slot?: number;
// }

// export interface QuestCard extends BaseCard<CardType.Quest> {
//   phase: MoonPhase;
//   condition: string;
//   reward: string;
//   points: number;
// }

// export interface EquipementCard extends BaseCard<CardType.Equipement> {
//   desription: string;
//   health: number;
//   ignoresAOE: boolean;
// }

// export interface AvatarCommandCard extends BaseCard<CardType.AvatarCommand> {
//   phase: MoonPhase;
//   // TODO
// }
