import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'src/pages/layout/layout';
import { MainPage } from 'src/pages/main-page';
import { SchoolsPage } from 'src/pages/schools-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (<Layout />),
    children: [
      {
        path: '/',
        element: (<MainPage />),
      },
      {
        path: '/schools',
        element: (<SchoolsPage />),
      },
    ],
  },
]);
