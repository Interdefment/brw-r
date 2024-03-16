import { kebabCase } from 'lodash';

import { BASE_URL } from 'src/shared/constants';
import { CardType } from 'src/shared/types';

export const getCardImageName = (cardType: CardType, name: string) => {
  return `${BASE_URL}images/${cardType}/${kebabCase(name)}.png`;
};
