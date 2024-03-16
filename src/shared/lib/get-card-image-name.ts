import { kebabCase } from 'lodash';

import { CardType } from 'src/shared/types';

export const getCardImageName = (cardType: CardType, name: string) => {
  return `/images/${cardType}/${kebabCase(name)}.png`;
};
