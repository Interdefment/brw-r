import { BaseCard, CardType } from 'src/shared/types';

export interface Jinx extends BaseCard<CardType.Jinx> {
  discardCondition?: string;
}
