"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import { motion } from 'framer-motion';
import Cards from './card';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { images } from './constants';

const customTheme: CustomFlowbiteTheme['carousel'] = {
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-black group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
  },
  indicators:{
    active:{
      off:"flex rounded-lg border border-gray-200 bg-[#333333] shadow-md dark:border-gray-700 dark:bg-gray-800",
      on:"bg-black dark:bg-gray-800"
    },
  }
};
export default function Carousels() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
  }, []);

  const renderCardGroups = () => {
    const groups = [];

    for (let i = 0; i < images.length; i += 3) {
      const group = images.slice(i, i + 3).map((image, index) => (
        <Cards 
          imageSrc={image.src}
          title={image.title}
          description={image.desc}
        />
      ));

      groups.push(
        <div key={i / 3} className="flex flex-row gap-5 justify-center">
          {group}
        </div>
      );
    }

    return groups;
  };

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 0.5s',
      }}
      className='my-9 grid justify-center w-screen h-[60%]'
    >
      <div className='flex flex-col items-start'>
        <h1 className='font-bold'>EXPLORE MORE OF OUR PRODUCT LINE</h1>
        <Carousel theme={customTheme} className='h-[60vh] w-[70vw]'>
          {renderCardGroups()}
        </Carousel>
      </div>
    </motion.div>
  );
}


//<img src={image.src} alt={`Slide ${index + 1}`} className='w-[50%] h-[90%] m-auto ml-8' />