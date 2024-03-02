import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import 'primeicons/primeicons.css';
import './app.css';

export const App = () => {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  );
};
