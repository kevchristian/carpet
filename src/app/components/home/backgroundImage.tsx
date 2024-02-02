"use client";
import {motion} from 'framer-motion'
import Image from "next/image";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import classNames, { Argument } from "classnames";
import Navigation from "../navigation";

interface BackgroundImageProps {
  children?: ReactNode;
  className?: Argument;
  image: ReactElement<typeof Image>;
}

type BackgroundImageAdditionalProps = Omit<
  ComponentPropsWithoutRef<"div">,
  keyof BackgroundImageProps
>;

export default function BackgroundImage({
  children,
  className,
  image,
  ...props
}: BackgroundImageProps & BackgroundImageAdditionalProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.5,
        staggerChildren: 0.04, 
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const text = "The Outstanding Custom and Stocked Carpet\nSolutions For You.";

  return (
    <div
      className={classNames("relative w-screen h-[75vh] align-bottom", className)}
      {...props}
    >
      <div className="inset-0">{image}</div>
      <div className="z-10 flex h-1/2 justify-end ">
        {children}
        <Navigation />

        
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="bottom-3 right-10 absolute text-white p-4 text-4xl font-semi font-[enriqueta] text-right"
        >
          {text.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === '\n' ? <br /> : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
}