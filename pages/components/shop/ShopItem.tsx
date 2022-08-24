import { Card, Row, Text } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export type MerchType = {
  id: string;
  itemId?: number;
  description?: string;
  title: string;
  price: number;
  img: string;
};

const ShopItem: React.FC<MerchType> = ({ id, itemId, title, price, img }) => {
  const itemPath = itemId ? itemId : id;

  return (
    <Link href={`/sklep/${itemPath}`}>
      <a>
        <Card isPressable className="w-44 h-72 md:w-52 m-1  md:m-4 text-center">
          <Card.Body>
            <Row wrap="wrap" justify="space-between" align="center">
              <Card.Image
                loading="lazy"
                className="rounded-xl content-none"
                width="10rem"
                height="10rem"
                src={img}
                objectFit="cover"
                alt={title}
              />
            </Row>

            <Row wrap="wrap" justify="space-around" align="center">
              <Text b>{title}</Text>
            </Row>

            <Row wrap="wrap" justify="space-around" align="center">
              <Text
                css={{
                  color: '$accents7',
                  fontWeight: '$semibold',
                  fontSize: '$sm',
                }}
              >
                {price.toFixed(2)} $
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </a>
    </Link>
  );
};

export default ShopItem;
