import { Card } from 'flowbite-react';
import Image from 'next/image';
import type { CustomFlowbiteTheme } from 'flowbite-react';

interface CardsProps {
  imageSrc: string;
  title: string;
  description: string;
}

const customTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'flex rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
  },
};

export default function Cards({ imageSrc, title, description }: CardsProps) {
  return (
    <Card
      className="max-w-sm h-[50vh] items-center pt-3"
      renderImage={() => <Image width={200} height={100} src={imageSrc} alt={title} />}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
