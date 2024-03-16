import { Outlet } from 'react-router-dom';

import { Header } from 'src/widgets/header';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className='min-h-dvh bg-background'>
        <Outlet />
      </main>
    </div>
  );
};
