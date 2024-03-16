import { createBrowserRouter } from 'react-router-dom';

import { JinxesPage } from 'src/pages/jinxes-page';
import { Layout } from 'src/pages/layout/layout';
import { RandomizerPage } from 'src/pages/randomizer-page';
import { SchoolsPage } from 'src/pages/schools-page';
import { UpgradesPage } from 'src/pages/upgrades-page';
import { BASE_URL } from 'src/shared/constants';
import { paths } from 'src/shared/paths';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (<Layout />),
    children: [
      {
        path: paths.randomizer.path,
        element: (<RandomizerPage />),
      },
      {
        path: paths.schools.path,
        element: (<SchoolsPage />),
      },
      {
        path: paths.upgrades.path,
        element: (<UpgradesPage />),
      },
      {
        path: paths.jinxes.path,
        element: (<JinxesPage />),
      },
    ],
  },
], { basename: import.meta.env.DEV ? '/' : BASE_URL });
