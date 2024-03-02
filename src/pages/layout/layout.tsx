import { Outlet } from 'react-router-dom';

import { Header } from 'src/widgets';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
