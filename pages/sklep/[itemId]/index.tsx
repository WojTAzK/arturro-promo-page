import Head from 'next/head';
import React from 'react';
import { MerchType } from '../../components/shop/ShopItem';
import { items } from '../localItems';

export const index: React.FC<{ itemId: string; item: MerchType }> = (props) => {
  const { title, description, price } = props.item;
  return (
    <>
      <Head>
        <title>{}</title>
      </Head>
      <div>{props.itemId}</div>
      <div>{JSON.stringify(props.item)}</div>
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
