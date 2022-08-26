import React, { PropsWithChildren } from 'react';
import { Text, Collapse, Input } from '@nextui-org/react';

const FAQItem: React.FC<
  PropsWithChildren & { title: string; subtitle?: string }
> = ({ title, subtitle, children }) => {
  return (
    <Collapse
      title={title}
      subtitle={subtitle}
      className="font-bold text-xl w-full"
    >
      <Text className="font-normal text-lg">{children}</Text>
    </Collapse>
  );
};

export default FAQItem;
