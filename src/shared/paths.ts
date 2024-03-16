import { Path } from './types';

const getBasePath = (path: string, label: string): Path => {
  return {
    path,
    label,
    generatePath() {
      return this.path;
    },
  };
};

export const paths = {
  randomizer: getBasePath('/', 'Рандомайзер'),
  schools: getBasePath('/schools', 'Школы магии'),
  upgrades: getBasePath('/upgrades', 'Апгрейды'),
  jinxes: getBasePath('/jinxes', 'Проклятья'),
};
