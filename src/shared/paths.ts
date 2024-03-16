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
  root: getBasePath('/', 'Главная'),
  schools: getBasePath('/schools', 'Школы магии'),
  upgrades: getBasePath('/upgrades', 'Апгрейды'),
  jinxes: getBasePath('/jinxes', 'Проклятья'),
};
