import { BaseCard, CardType, MoonPhase } from "src/shared/types";

export interface EvocationCard extends BaseCard<CardType.Evocation> {
  health: number;
  damage: number;
  movement: number;
  description?: string;
}

export interface EventCard extends BaseCard<CardType.Event> {
  phase: MoonPhase;
  enterPoints: number;
  exitPoints: number;
  diescription: string;
  slot?: number;
}

export interface QuestCard extends BaseCard<CardType.Quest> {
  phase: MoonPhase;
  condition: string;
  reward: string;
  points: number;
}

export interface UpgradeCard extends BaseCard<CardType.Upgrade> {
  desription: string;
}

export interface JinxCard extends BaseCard<CardType.Jinx> {
  desription: string;
  discardCondition: string;
}

export interface EquipementCard extends BaseCard<CardType.Equipement> {
  desription: string;
  health: number;
  ignoresAOE: boolean;
}

export interface AvatarCommandCard extends BaseCard<CardType.AvatarCommand> {
  phase: MoonPhase;
  // TODO
}
