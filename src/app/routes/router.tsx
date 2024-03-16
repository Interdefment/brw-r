import { createBrowserRouter } from 'react-router-dom';

import { JinxesPage } from 'src/pages/jinxes-page';
import { Layout } from 'src/pages/layout/layout';
import { MainPage } from 'src/pages/main-page';
import { SchoolsPage } from 'src/pages/schools-page';
import { UpgradesPage } from 'src/pages/upgrades-page';
import { paths } from 'src/shared/paths';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (<Layout />),
    children: [
      {
        path: paths.root.path,
        element: (<MainPage />),
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
]);
