import { UPGRADES } from 'src/entities/upgrade';
import { CardsList } from 'src/features/cards-list/cards-list';

export const UpgradesPage: React.FC = () => {
  return (
    <div className='p-4 flex flex-col items-center'>
      <CardsList items={UPGRADES} />
    </div>
  );
};
