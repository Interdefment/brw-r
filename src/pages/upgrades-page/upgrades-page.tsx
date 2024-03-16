import { UPGRADES } from 'src/entities/upgrade';
import { CardsList } from 'src/features/cards-list/cards-list';
import { Randomizer } from 'src/widgets/randomizer';

export const UpgradesPage: React.FC = () => {
  return (
    <div className='p-4 flex flex-col items-center'>
      <Randomizer buttonText='Случайный апгрейд' className='mb-6' items={UPGRADES} />
      <CardsList items={UPGRADES} />
    </div>
  );
};
