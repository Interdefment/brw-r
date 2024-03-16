import { BaseCard, CardType } from 'src/shared/types';
import { CardBox } from 'src/widgets/card-box';

interface CardsListProps<T extends CardType> {
  items: BaseCard<T>[];
}

export const CardsList = <T extends CardType>({
  items,
}: CardsListProps<T>) => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {items.map((item) => (
        <CardBox key={item.name} card={item} />
      ))}
    </div>
  );
};
