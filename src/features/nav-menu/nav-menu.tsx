import { useState } from 'react';

import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Sidebar } from 'primereact/sidebar';
import { useNavigate } from 'react-router-dom';

import { paths } from 'src/shared/paths';
import { Path } from 'src/shared/types';

export const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  const getMenuItem = (path: Path): MenuItem => {
    return {
      label: path.label,
      command: () => {
        closeMenu();
        navigate(path.generatePath());
      },
    };
  };

  const menuItems: MenuItem[] = [
    getMenuItem(paths.root),
    getMenuItem(paths.schools),
    getMenuItem(paths.upgrades),
    getMenuItem(paths.jinxes),
  ];

  return (
    <>
      <Sidebar visible={isOpen} onHide={() => setIsOpen(false)}>
        <Menu model={menuItems} pt={{
          root: {
            className: 'border-0 w-full',
          },
        }}
        />
      </Sidebar>
      <Button icon={PrimeIcons.BARS} size='small' onClick={() => setIsOpen(true)} />
    </>
  );
};
