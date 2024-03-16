import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

import { BaseCard, CardType } from 'src/shared/types';

interface CardBoxProps<T extends CardType> {
  card: BaseCard<T>;
}

export const CardBox = <T extends CardType>({ card }: CardBoxProps<T>) => {
  return (
    <Card pt={{ root: { className: 'max-w-80' }, content: { className: 'pt-0 pb-0' } }} title={card.name}>
      {card.description && (
        <p>
          {card.description}
        </p>
      )}
      {card.image && (
        <Image preview alt={card.name} src={card.image} />
      )}
    </Card>
  );
};
