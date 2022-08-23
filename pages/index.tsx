import React from 'react';
import Head from 'next/head';

import clases from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

import arturZdj from '../public/Artur_foty/nagi_artur_edit_xd_small.png';
import CarModal from './components/car-modal/CarModal';

const MainPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Artur Kowalski</title>
      </Head>

      {/* title */}
      <section className={`${clases.maintitle}  text-5xl text-justify`}>
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

        <div
          className={`${clases.subtitle} text-xl font-normal mt-16 text-center`}
        >
          Witaj na wspaniałej stronie o MNIE!!!
        </div>
      </section>

      {/* Sekcja z opisem */}
      <section
        className={`${clases.main} paralax p-4 text-center bg-slate-800 bg-opacity-90`}
      >
        <div
          className={`${clases.subtitle} text-2xl font-normal bg-black bg-opacity-60 w-fit m-auto p-8 rounded-3xl`}
        >
          Poznaj mnie lepiej
        </div>
        {/* Zdjecie XD */}
        <Image src={arturZdj} alt="Zdjęcie Artura" />

        {/* Opis */}
        <span className="block my-8 w-11/12 xl:w-fit mx-auto text-inherit text-justify text-2xl p-4 px-6 rounded-xl mt-16 bg-black bg-opacity-60">
          <p>
            Jestem przedsiębiorcą, studentem, pożyczkobiorcą, bezdomnym i
            milionerem* (jeśli pożyczysz mi pare milionów).
          </p>
          <br />
          <p>
            Uwielbiam Wyjazdy do Legnicy. {'('}Jeśli jestes z legnicy serdecznie
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

      {/* Sekcja z samochodami */}
      <section>
        <div
          className={`${clases.subtitle} my-8 text-2xl font-normal bg-black bg-opacity-60 w-fit m-auto p-8 rounded-3xl`}
        >
          Moje Samochodziki
        </div>

        {/* samochody */}
        <CarModal
          title="Corsita"
          imgSrc="/Artur_foty/cash-macanaya-QFfljL1xWvw-unsplash.jpg"
          author="@cashmacanaya"
          imgLink="https://unsplash.com/photos/QFfljL1xWvw"
        >
          <div
            className={`${clases.subtitle} ${clases.corsita} ${clases.car} text-2xl font-normal  w-4/5 m-4 p-8 rounded-3xl`}
          >
            Corsita
          </div>
        </CarModal>

        <CarModal
          title="Fordziu"
          imgSrc="/Artur_foty/shiv-prajapati-mEqJ80AjBdI-unsplash.jpg"
          author="@saycwanand"
          imgLink="https://unsplash.com/photos/mEqJ80AjBdI"
        >
          <div
            className={`${clases.subtitle} ${clases.ford} ${clases.car}  text-2xl font-normal  w-fit m-4 p-8 rounded-3xl`}
          >
            Fordziu
          </div>
        </CarModal>

        <div
          className={`${clases.subtitle} text-center text-md font-normal m-4`}
        >
          *Zdjęcia samochodów mają charakter poglądowy.
        </div>
      </section>
    </>
  );
};

export default MainPage;
