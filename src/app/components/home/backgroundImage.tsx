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
  return (
    <div
      className={classNames("relative w-screen h-[100vh] ", className)}
      {...props}
    >
      <div className="inset-0">{image}</div>
      <div className="z-10 flex h-full justify-end ">
        {children}
        <Navigation />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bottom-3 right-10 absolute text-white p-4 text-4xl font-semi font-[enriqueta] text-right"
        >
          The Outstanding Custom and Stocked Carpet <br></br>Solutions For You.
        </motion.h1>
      </div>
    </div>
  );
}