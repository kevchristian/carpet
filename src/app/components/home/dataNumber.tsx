"use client";
import { animate } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";


interface CounterProps {
  from: number;
  to: number;
  title: string;
  abf: string;
  icons: IconProp;
}

const Number: React.FC<CounterProps> = ({ from, to, title ,abf,icons}) => {
    const nodeRef = useRef<HTMLParagraphElement | null>(null);
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      const node = nodeRef.current;
      
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
  
      return () => {
        observer.unobserve(node);
      };
    }, []);
  
    useEffect(() => {
      const node = nodeRef.current;
  
      if (isInView && node) {
        const controls = animate(from, to, {
          duration: 3,
          onUpdate(value) {
            node.textContent = Math.round(value).toString();
          },
        });
  
        return () => controls.stop();
      }
    }, [from, to, isInView]);
  
    return (
      <>
          <div>
            <motion.p
                  ref={nodeRef}
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 3 }}
                  style={{ fontSize: '2em' }}
                  className="text-lg my-5 inline font-bold"
              /><h1 className="inline text-2xl font-bold">{abf}</h1>
            <h1 className="text-3xl  my-5">{title}</h1> 
            <FontAwesomeIcon className="text-5xl" icon={icons} />
          </div>          
      </>
    );
  };
  
  export default Number;