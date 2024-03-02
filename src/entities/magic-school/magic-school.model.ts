export enum MagicSchoolType {
  Agony = 'agony',
  Nightmare = 'nightmare',
  Hex = 'hex',
  Alchemy = 'alchemy',
  Shamanic = 'shamanic',
  Necromancy = 'necromancy',
  Forgotten = 'forgotten',
}

export interface MagicSchool {
  type: MagicSchoolType;
  name: string;
  description: string;
}
