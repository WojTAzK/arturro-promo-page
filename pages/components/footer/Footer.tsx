import { Spacer } from '@nextui-org/react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 bg-opacity-90 p-4 md:p-8 text-center mb-0">
      <div className="flex flex-row justify-evenly flex-nowrap text-sm md:text-lg text-justify">
        <div className="flex flex-col justify-center p-4 m-1 border border-slate-400 border-double rounded-lg">
          <p>
            Stronę wykonał{' '}
            <a
              href="https://www.github.com/wojtazk"
              target={'_blank'}
              rel="noreferrer"
              className="text-sky-300"
            >
              Wojciech Kowal 🖥️🖱️
            </a>
            <Spacer y={1} />
          </p>
          <p>
            <a
              href="https://www.instagram.com/kowalwojtek/"
              target={'_blank'}
              rel="noreferrer"
              className="text-violet-400"
            >
              @kowalwojtek
            </a>
          </p>
        </div>

        <div className="flex flex-col justify-center p-4 m-1 border border-slate-400 border-double rounded-lg">
          <p>W razie czego Artur się zgodił 💩😎</p>
          <Spacer y={1} />
          <p>
            <a
              href="https://www.instagram.com/dynius1007/"
              target={'_blank'}
              rel="noreferrer"
              className="text-violet-400"
            >
              @dynius1007
            </a>
          </p>
        </div>

        <div className="flex flex-col justify-center p-4 m-1 border border-slate-400 border-double rounded-lg">
          <p>PS: Dzięki za chore pomysły Bartek.</p>
          <Spacer y={1} />
          <p>
            <a
              href="https://www.instagram.com/talkos17/"
              target={'_blank'}
              rel="noreferrer"
              className="text-violet-400"
            >
              @talkos17
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
