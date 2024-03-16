import { JINXES } from 'src/entities/jinx';
import { UPGRADES } from 'src/entities/upgrade';
import { Randomizer } from 'src/widgets/randomizer';

export const RandomizerPage: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 py-10'>
      <Randomizer buttonText='Случайный апгрейд' className='mb-6' items={UPGRADES} />
      <Randomizer buttonText='Случайное проклятье' className='mb-6' items={JINXES} />
    </div>
  );
};
