import Link from 'next/link';
import React, { useEffect } from 'react';

const NavLInk: React.FC<{
  href: string;
  text: string;
  active?: boolean;
}> = ({ href, text, active }) => {
  return (
    <Link href={href} replace>
      <li
        className={`m-1 p-4 md:pt-4 bg-inherit md:px-4 rounded-lg cursor-pointer w-auto hover:bg-slate-600 bg-opacity-90 border-solid border-slate-500 border md:border-none md:my-2 md:mx-1 ${
          active && 'bg-slate-900 underline'
        }`}
      >
        {text}
      </li>
    </Link>
  );
};

export default NavLInk;
