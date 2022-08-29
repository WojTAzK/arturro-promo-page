import React, { useEffect, useState } from 'react';

import HamburgerMenu from './HamburgerMenu';
import { Avatar, Tooltip } from '@nextui-org/react';
import Link from 'next/link';

type NavItem = {
  id: string;
  href: string;
  text: string;
  active: boolean;
  hasChildren?: boolean;
};
const navigationItems: NavItem[] = [
  {
    id: 'nav_item_1',
    href: '/',
    text: 'O mnie',
    active: false,
  },
  {
    id: 'nav_item_2',
    href: '/sklep',
    text: 'Sklep',
    active: false,
    hasChildren: true,
  },
  {
    id: 'nav_item_3',
    href: '/randewu',
    text: 'Umów się ze mną!',
    active: false,
  },
  {
    id: 'nav_item_4',
    href: '/faq',
    text: 'FAQ',
    active: false,
  },
];

const Navigation: React.FC = () => {
  const [menu, setMenu] = useState<NavItem[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  let url = typeof window !== 'undefined' ? window.location.pathname : 'null';
  useEffect(() => {
    const updatedNavigationItems = navigationItems.map((item) => {
      if (item.hasChildren)
        return url.startsWith(item.href) && url !== '/'
          ? { ...item, active: true }
          : item;

      return url === item.href ? { ...item, active: true } : item;
    });

    setMenu(updatedNavigationItems);
  }, [url]);

  return (
    <nav
      className={`select-none z-50 text-slate-100 w-full pb-1 flex flex-row justify-center bg-slate-800 bg-opacity-90 overflow-hidden ${
        showMenu ? 'rounded-b-lg h-fit' : 'max-h-17'
      } md:h-auto`}
    >
      <ul className="sticky grid-cols-4 m-0 md:flex md:justify-start w-full rounded-lg align-baseline">
        <span className="flex justify-between md:mr-16 lg:mr-32">
          <li>
            <Tooltip
              content="Artur Kowalski - to o nim jest ta strona"
              placement="bottomStart"
              color="primary"
              shadow
              trigger="click"
              className="overflow-hidden rounded-full"
            >
              <Avatar
                text="AK"
                size="xl"
                src="/Artur_foty/artur_logo.jpg"
                className="m-1"
                color="gradient"
                bordered
                borderWeight="bold"
                aria-label="Artur avatar"
                pointer
              />
            </Tooltip>
          </li>
          <li className="md:hidden">
            {/* <Image src={menuButton} alt="menu icon" /> */}
            <HamburgerMenu
              onClick={() => setShowMenu((prevState) => !prevState)}
            />
          </li>
        </span>

        <span
          className={`md:flex ${
            showMenu ? 'opacity-100' : 'opacity-0'
          } md:opacity-100 transition-all ease-in-out duration-300`}
        >
          {menu.map((item) => (
            <Link href={item.href} replace key={item.id}>
              <a>
                <li
                  className={`md:w-auto m-1 p-4 md:pt-3.5 bg-inherit md:px-4 rounded-lg cursor-pointer md:hover:bg-slate-600 bg-opacity-90 border-solid border-slate-500 border md:border-none md:my-2 md:mx-1 ${
                    item.active ? 'bg-slate-900 underline' : ''
                  }`}
                >
                  {item.text}
                </li>
              </a>
            </Link>
          ))}
        </span>
      </ul>
    </nav>
  );
};

export default Navigation;
