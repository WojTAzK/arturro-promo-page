import React from 'react';
import Head from 'next/head';
import { Text } from '@nextui-org/react';

import clases from './index.module.css';
import Link from 'next/link';

const MainPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Artur Kowalski</title>
      </Head>

      {/* title */}
      <div className={`${clases.maintitle}  text-5xl text-center`}>
        <div className="m-auto w-5/6 h-fit md:w-fit p-12 mt-16 bg-black bg-opacity-60 rounded-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-300 to-purple-500">
            Cześć
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-300">
            Nazywam się
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-300 to-blue-400">
            Artur Kowalski
          </span>
        </div>

        <div className={`${clases.subtitle} text-xl font-normal mt-16`}>
          Witaj na wspaniałej stronie o MNIE!!!
        </div>
      </div>

      <section
        className={`${clases.main} paralax p-4 text-center bg-slate-800 bg-opacity-90`}
      >
        {/*  */}
        <span className="block my-4 mx-0 md:mx-16 text-inherit text-2xl p-4 px-6 rounded-xl mt-16 bg-black bg-opacity-60 text-justify">
          <p>
            Jestem predsiębiorcą, studentem, pożyczkobiorcą, bezdomnym i
            milionerem* (jeśli pożyczysz mi pare milionów).
          </p>
          <br />
          <p>
            Uwielbiam Wyjazdy do Legnicy. (Jeśli jestes z legnicy serdecznie
            zapraszam do sekcji{' '}
            <Link href="/randewu">
              <a className="text-cyan-500">"Umów się ze mną!"</a>
            </Link>
            {')'}
          </p>
          <br />
          <p>
            Komputery znam lepiej niż własną kieszeń, ale tylko wtedy gdy mam
            połączenie internetowe.
          </p>
          <br />
          <p>
            Nie mam sobie równych w programowaniu, niestety tylko wtedy gdy
            Wojtek stoi obok. 👨‍💻🧑‍💻
          </p>
        </span>
      </section>
    </>
  );
};

export default MainPage;
