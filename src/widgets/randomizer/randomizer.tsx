import { useState } from 'react';

import { random } from 'lodash';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { ProgressSpinner } from 'primereact/progressspinner';
import { classNames } from 'primereact/utils';

import { BaseCard, CardType } from 'src/shared/types';

import { SPIN_TIME } from './randomizer.constants';

interface RaandomizerProps<T extends CardType> {
  items: BaseCard<T>[];
  buttonText: string;
  className?: string;
}

export const Randomizer = <T extends CardType>({
  items,
  buttonText,
  className,
}: RaandomizerProps<T>) => {
  const [selectedItem, setSelectedItem] = useState<BaseCard<T> | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleButtonClick = () => {
    setIsSpinning(true);
    const randomIndex = random(items.length - 1);
    setSelectedItem(items[randomIndex]);

    setTimeout(() => {
      setIsSpinning(false);
    }, SPIN_TIME);
  };

  return (
    <Card pt={{ root: { className: classNames('max-w-80', className) }, content: { className: 'pt-0 pb-0' } }}>
      <div className='flex flex-col justify-center items-center'>
        <Button
          className={classNames('flex-grow-0', { 'mb-4': isSpinning || selectedItem })}
          disabled={isSpinning}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
        <div className='flex justify-center items-center max-w-80'>
          <div className={classNames('relative', { 'invisible': isSpinning })}>
            {selectedItem && (
              <Image alt={selectedItem.name} src={selectedItem.image} />
            )}
          </div>
          <div className='absolute'>
            {isSpinning && <ProgressSpinner />}
          </div>
        </div>
      </div>
    </Card>
  );
};
