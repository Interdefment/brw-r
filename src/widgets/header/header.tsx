import { Panel } from 'primereact/panel';

import { NavMenu } from 'src/features/nav-menu';

export const Header: React.FC = () => {
  return (
    <Panel>
      <NavMenu />
    </Panel>
  );
};
