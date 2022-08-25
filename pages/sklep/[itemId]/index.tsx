import React from 'react';

import { Button, Card, Row, Text } from '@nextui-org/react';
import Head from 'next/head';

import { MerchType } from '../../components/shop/ShopItem';
import { items } from '../localItems';

import confetti from 'canvas-confetti';

export const index: React.FC<{ itemId: string; item: MerchType }> = (props) => {
  const { title, description, price, img } = props.item;

  const handleClick = () => {
    confetti({
      origin: { x: 0.5, y: 1.2 },
      spread: 120,
      gravity: -1,
      particleCount: 100,
    });
  };

  return (
    <>
      <Head>
        <title>{`Sklep - ${title}`}</title>
      </Head>

      <section className="h-auto md:min-h-screen py-8">
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
                className=" rounded-3xl m-8 shadow-xl shadow-neutral-300"
              />

              <Row wrap="wrap" align="center">
                <Card className="w-11/12 m-auto">
                  <Card.Body>
                    <Text className="p-8">{description}</Text>
                  </Card.Body>
                </Card>
                <Card className="w-11/12 m-auto">
                  <Card.Body>
                    <Text className="p-8 m-auto">Cena: {price} $</Text>
                  </Card.Body>
                </Card>
              </Row>
            </Row>
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              bgBlur: '#ffffff66',
            }}
          >
            <Row justify="flex-end" wrap="wrap" className="p-4">
              <Button
                onClick={handleClick}
                size="lg"
                light
                bordered
                shadow
                color="success"
                className="md:mr-4 w-full md:w-auto my-2 md:my-0"
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
      </section>
    </>
  );
};
export default index;

export async function getStaticPaths() {
  const localPathNames = items.map((item) => ({ params: { itemId: item.id } }));

  const pathNames = [];
  for (let i = 1; i <= 30; i++) pathNames.push({ params: { itemId: i + '' } });

  return { paths: [...localPathNames, ...pathNames], fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { itemId: string };
}) {
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
