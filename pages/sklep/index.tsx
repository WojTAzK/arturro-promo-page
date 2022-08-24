import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import ShopItem, { MerchType } from '../components/shop/ShopItem';

import { items } from './localItems';
import { Loading } from '@nextui-org/react';

const index = () => {
  const [loadedItems, setLoadedItems] = useState<MerchType[]>([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setLoadedItems(
          data.products.map((item: any) => ({
            itemId: item.id,
            id: `loaded-item-${item.id}`,
            title: item.title,
            description: item.description,
            price: item.price,
            img: item.images[0],
          }))
        );

        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Artur Kowalski - Sklep</title>
      </Head>

      {loading && (
        <div className="h-screen text-center py-48 text-lg">
          <Loading
            type="default"
            size="xl"
            color="secondary"
            textColor="secondary"
          >
            Wczytywanie...
          </Loading>
        </div>
      )}

      <section className="w-fit md:w-11/12 m-auto my-2 md:my-4 text-lg flex flex-row flex-wrap justify-center">
        {!loading && items.map((item) => <ShopItem {...item} key={item.id} />)}
        {!loading &&
          loadedItems.map((item) => <ShopItem {...item} key={item.id} />)}
      </section>
    </>
  );
};

export default index;
