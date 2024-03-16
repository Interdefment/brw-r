import { getCardImageName } from 'src/shared/lib/get-card-image-name';
import { CardType } from 'src/shared/types';

import { Jinx } from './jinx.model';

const jinxesNames = [
  'Bane of Baktiotha',
  'Divine Dance',
  'Hourglass of Seth',
  'Inverted Pyramid',
  'Locusts',
  'Oblivion',
  'Slowness',
  'Spinning Wheel Sting',
  'Vulnerability',
  'Weakness',
];

export const JINXES: Jinx[] = jinxesNames.map((name) => ({
  name,
  type: CardType.Jinx,
  image: getCardImageName(CardType.Jinx, name),
}));
