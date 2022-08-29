import React, { useCallback } from 'react';

import { Button, Card, Row, Text } from '@nextui-org/react';
import Head from 'next/head';

import { MerchType } from '../../components/shop/ShopItem';
import { items } from '../../lib/_localItems';

import confetti from 'canvas-confetti';

import policeLineImg from '../../../public/sklep_foty/fencing-4331079.png';
import Image from 'next/image';

export const Index: React.FC<{ itemId: string; item: MerchType }> = (props) => {
  const { title, description, price, img } = props.item;

  const handleClick = useCallback(() => {
    confetti({
      origin: { y: 1 },
      gravity: -1,
      spread: 70,
      particleCount: 70,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{`Sklep - ${title} 🕺🎶`}</title>
      </Head>

      <section className="h-auto md:min-h-screen py-4 md:py-8">
        <Card className="w-11/12 md:w-4/5 m-auto" variant="bordered">
          <Card.Header>
            <Row justify="space-around">
              <Text h1 size="2rem">
                {title}
              </Text>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row
              align="center"
              justify="center"
              className="flex-wrap md:flex-nowrap"
            >
              <Card.Image
                src={img}
                width="30rem"
                objectFit="cover"
                alt="zdjęcie produktu"
                className=" rounded-3xl m-8 mt-0 shadow-xl shadow-neutral-400"
              />

              <Row wrap="wrap" align="center">
                <Card className="w-11/12 m-auto shadow-xl shadow-neutral-300">
                  <Card.Body>
                    <Text className="p-8 m-auto">
                      Cena:{' '}
                      <span className="text-red-600 text-2xl">{price}$</span>
                    </Text>
                  </Card.Body>
                </Card>
                <Card className="w-11/12 m-auto shadow-xl shadow-neutral-300">
                  <Card.Body>
                    <Text className="p-8 text-center">{description}</Text>
                  </Card.Body>
                </Card>
              </Row>
            </Row>
          </Card.Body>
          <Card.Footer isBlurred>
            <Row justify="center" wrap="wrap" className="p-4">
              <Button
                onClick={handleClick}
                size="lg"
                light
                bordered
                shadow
                color="success"
                className="md:mr-4 w-full md:w-auto my-4 md:my-0"
              >
                Kup teraz
              </Button>
              <Button
                onClick={handleClick}
                size="lg"
                light
                bordered
                shadow
                color="success"
                className="w-full md:w-auto"
              >
                Dodaj do koszyka
              </Button>
            </Row>
          </Card.Footer>
        </Card>

        <div className="my-24">
          <Image
            className="w-full saturate-[75%] opacity-95"
            src={policeLineImg}
            alt="police line - do not cross"
          />
        </div>

        <iframe
          className="m-auto rounded-3xl mt-4 md:mt-24"
          width="80%"
          height="400px"
          src="https://www.youtube-nocookie.com/embed/GtL1huin9EE?autoplay=1&loop=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};
export default React.memo(Index);

export async function getStaticPaths() {
  const localPathNames = items.map((item) => ({ params: { itemId: item.id } }));

  const pathNames = [];
  for (let i = 1; i <= 30; i++) pathNames.push({ params: { itemId: i + '' } });

  return { paths: [...localPathNames, ...pathNames], fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  let item = {};
  if (params.itemId.startsWith('local')) {
    [item] = items.filter((item) => item.id === params.itemId);
  } else {
    const response = await fetch(
      `https://dummyjson.com/products/${params.itemId}`
    );
    const data = await response.json();
    item = {
      itemId: data.id,
      id: `loaded-item-${data.id}`,
      title: data.title,
      description: data.description,
      price: data.price,
      img: data.images[0],
    };
  }

  return {
    props: {
      itemId: params.itemId,
      item,
    },
  };
}
