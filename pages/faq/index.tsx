import { Collapse, Input, Text } from '@nextui-org/react';
import Head from 'next/head';
import React, { useState } from 'react';
import FAQItem from '../components/faq/FAQItem';

let touched = false;

const Index = () => {
  const [maWiekszego, setMaWiekszego] = useState(false);

  const inputOnChangeHandler = (event: any) => {
    if (event.target.value < 42.2137) setMaWiekszego(true);
    else setMaWiekszego(false);

    touched = true;
  };
  return (
    <>
      <Head>
        <title>Artur Kowalski - FAQ </title>
      </Head>

      <section className="w-[95%] md:w-10/12 m-auto bg-black bg-opacity-60 rounded-3xl text-slate-100 my-4 md:my-8 p-2 md:p-4">
        <h1 className="text-center text-2xl underline mb-4 md:mb-8">
          Często zadawane pytania
        </h1>

        <Collapse.Group accordion={false} splitted>
          <Collapse
            title="Czy Artur ma większego niż ja?"
            className="font-bold text-xl w-full"
          >
            <Input
              min="0"
              placeholder="12"
              type="number"
              label="Twój rozmiar:"
              labelRight="cm"
              onChange={inputOnChangeHandler}
              status={`${
                maWiekszego ? 'error' : !touched ? 'default' : 'success'
              }`}
            />
            <br />
            <br />
            <Text>Odpowiedź:</Text>
            {maWiekszego && touched && (
              <Text className="text-red-500">Niestety TAK</Text>
            )}
            {!maWiekszego && touched && (
              <Text className="text-green-500">Ale GIGANT</Text>
            )}
          </Collapse>
        </Collapse.Group>

        <Collapse.Group className="" splitted>
          <FAQItem title="Kim jest Artur?">
            Ja też zadaje sb to pytanie.
          </FAQItem>
          <FAQItem title="A tak na serio. Kim jest Artur?">
            NIE MAM POJĘCIA...
          </FAQItem>
          <FAQItem title="PRZESTAŃ ROBIĆ GŁUPIE ŻARTY I ODPOWIEDZ NA PYTANIE!!!">
            Artur Kowalski - jest to osoba z która musisz się umówić by się
            wiecej na jej temat dowiedzieć.
            <br /> Ale co ci szkodzi, gorszy niż twój były nie będzie.
          </FAQItem>
          <FAQItem title="Ile lat ma Artur?">
            Jeśli pytasz tylko po ty by dowiedzieć się czy z Arturem można
            legalnie uprawiać sporty ekstremalne w łóżku...
            <br />
            To TAK można, ale nw jaki sport ekstremalny się uprawia w 2 minuty
            (co ja gadam &quot;2 minuty&quot;, bardziej 30 sekund).
          </FAQItem>
          <FAQItem title="Jakiej płci jest Arturito?">
            W poniedziałki jest Działem samobieżnym z I wojny światowej.
            <br />
            W resztę dni identyfikuje się jako *&quot;PDF File&quot; (Plik PDF)
            <br />
            <br />
            *czytaj &quot;Pedophile&quot;
          </FAQItem>
          <FAQItem title="Czy Artur ma psa?">
            Po co ci taka wiedza? (Ma)
          </FAQItem>
          <FAQItem title="Czy Artur ma dziewczynę?">
            Jeśli ma, to na 100% przykrywka.
          </FAQItem>
          <FAQItem title="Czy Artur jest seksistą?">
            <span className="italic">
              &quot;Kto ci pozwolił wyjść z kuchni, łap za mopa i wypi******j
              stąd.&quot;
            </span>
            <br /> ~ Artur Kowalski (podczas rozmowy z ojcem)
          </FAQItem>
        </Collapse.Group>
      </section>
    </>
  );
};

export default Index;
