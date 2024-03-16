import { Panel } from 'primereact/panel';
import { useLocation } from 'react-router-dom';

import { NavMenu } from 'src/features/nav-menu';
import { paths } from 'src/shared/paths';

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  const title = Object.values(paths).find((path) => path.path === pathname)?.label;

  return (
    <Panel>
      <div className='flex items-center'>
        <NavMenu />
        <h1 className='text-xl ml-4'>{title}</h1>
      </div>
    </Panel>
  );
};
