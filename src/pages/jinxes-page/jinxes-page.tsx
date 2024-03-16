import { JINXES } from 'src/entities/jinx';
import { CardsList } from 'src/features/cards-list/cards-list';
import { Randomizer } from 'src/widgets/randomizer';

export const JinxesPage: React.FC = () => {
  return (
    <div className='p-4 flex flex-col items-center'>
      <Randomizer buttonText='Случайное прокляте' className='mb-6' items={JINXES} />
      <CardsList items={JINXES} />
    </div>
  );
};
