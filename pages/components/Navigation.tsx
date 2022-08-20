import React, { useEffect, useState } from 'react';
import NavLInk from './NavLInk';

import Image from 'next/image';
import menuButton from '../../public/menu-pngrepo-com.png';

type NavItem = { key: string; href: string; text: string; active: boolean };
const navigationItems: NavItem[] = [
  {
    key: 'nav_item_1',
    href: '/',
    text: 'O mnie',
    active: false,
  },
  {
    key: 'nav_item_2',
    href: '/sklep',
    text: 'Sklep',
    active: false,
  },
  {
    key: 'nav_item_3',
    href: '/randewu',
    text: 'Umów się ze mną!',
    active: false,
  },
  {
    key: 'nav_item_4',
    href: '/faq',
    text: 'FAQ',
    active: false,
  },
];

const Navigation: React.FC = () => {
  const [menu, setMenu] = useState<NavItem[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  let url = typeof window !== 'undefined' && window.location.pathname;
  useEffect(() => {
    console.log('rendering nav');
    const updatedNavigationItems = navigationItems.map((item) =>
      item.href === url ? { ...item, active: true } : item
    );

    setMenu(updatedNavigationItems);
  }, [url]);

  return (
    <nav
      className={`text-slate-100 transition-all ease-in-out duration-300 w-full flex flex-row justify-center bg-slate-800 bg-opacity-90 overflow-hidden ${
        showMenu ? 'h-80 md:h-auto' : 'h-16 md:h-auto'
      }`}
    >
      <ul className="grid-cols-4 m-0 md:flex md:justify-center w-full md:w-4/5 rounded-lg align-baseline">
        <li
          className="w-14 p-3 cursor-pointer md:hidden"
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          <Image src={menuButton} alt="menu icon" />
        </li>

        {menu.map((item) => (
          <NavLInk {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
