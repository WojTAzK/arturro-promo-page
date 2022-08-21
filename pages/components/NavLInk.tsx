import Link from 'next/link';
import React from 'react';

const NavLInk: React.FC<{
  href: string;
  text: string;
  active?: boolean;
}> = ({ href, text, active }) => {
  return (
    <Link href={href} replace>
      <li
        className={`md:w-auto m-1 p-4 md:pt-3.5 bg-inherit md:px-4 rounded-lg cursor-pointer md:hover:bg-slate-600 bg-opacity-90 border-solid border-slate-500 border md:border-none md:my-2 md:mx-1 ${
          active && 'bg-slate-900 underline'
        }`}
      >
        {text}
      </li>
    </Link>
  );
};

export default NavLInk;
