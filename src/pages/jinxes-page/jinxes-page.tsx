import { JINXES } from 'src/entities/jinx';
import { CardsList } from 'src/features/cards-list/cards-list';

export const JinxesPage: React.FC = () => {
  return (
    <div className='p-4 flex flex-col items-center'>
      <CardsList items={JINXES} />
    </div>
  );
};
