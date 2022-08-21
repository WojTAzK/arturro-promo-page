import React, { useState } from 'react';
import style from './HamburgerMenu.module.css';

// Copyright (c) 2022 by Mikael Ainalem (https://codepen.io/ainalem/pen/wvKOEMV)
// Copyright (c) 2022 by Wojciech Kowal

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const HamburgerMenu: React.FC<{
  onClick: () => void;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { menu, opened, line, line1, line2, line3 } = style;
  return (
    <button
      className={`${menu} ${isOpen ? opened : null} w-16 p-0 m-0`}
      onClick={() => {
        setIsOpen((prevState) => !prevState);
        props.onClick();
      }}
      aria-label="Main Menu"
      aria-expanded={isOpen}
    >
      <svg width="4rem" viewBox="0 0 100 100">
        <path
          className={`${line} ${line1}`}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className={`${line} ${line2}`} d="M 20,50 H 80" />
        <path
          className={`${line} ${line3}`}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
  );
};

export default HamburgerMenu;
