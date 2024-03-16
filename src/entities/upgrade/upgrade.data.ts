import { getCardImageName } from 'src/shared/lib/get-card-image-name';
import { CardType } from 'src/shared/types';

import { Upgrade } from './upgrade.model';

const upgradeNames = [
  'Cerebral Implant',
  'Corrosive Plasma',
  'Crafted Crossbow',
  'Hyperdermis',
  'Muscular Implant',
  'Pegasus\' Feathers',
  'Regenerating Ichor',
  'Reinforced Dermis',
  'Skinblade',
  'Tendon Implant',
  'Warscratch',
];

export const UPGRADES: Upgrade[] = upgradeNames.map((name) => ({
  name,
  type: CardType.Upgrade,
  image: getCardImageName(CardType.Upgrade, name),
}));
