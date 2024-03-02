export enum CardType {
  Spell,
  Evocation,
  Quest,
  Event,
  Upgrade,
  Jinx,
  Equipement,
  AvatarCommand,
}

export interface BaseCard<T extends CardType> {
  type: T;
  name: string;
  image?: string;
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
