import { MagicSchoolType } from "../magic-school";
import { BaseCard, CardType, EffectTarget } from "src/shared/types";

export enum SpellType {
  Combat,
  Contingency,
  Protection,
  Trap,
}

export enum SpellElement {
  Air,
  Earth,
  Fire,
  Water,
  Sacred,
  Profane,
  Magic,
  AllElements,
}

export interface SpellSide {
  type: SpellType;
  element: SpellElement;
  target: EffectTarget;
  description: string
}

interface SpellCard extends BaseCard<CardType.Spell> {
  primary: SpellSide;
  secondary: SpellSide;
  instability?: boolean;
}

export interface SchoolSpellCard extends SpellCard {
  school: MagicSchoolType;
}

export interface PersonalSpellCard extends SpellCard {
  mage: string;
  relatedSchools: MagicSchoolType[];
}