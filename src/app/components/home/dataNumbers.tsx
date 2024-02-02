"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Number from "./dataNumber";
import { data } from './data';

export default function Counter() {

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
  
      return () => {
        observer.unobserve(node);
      };
    }, []);
  
  
    return (
      <>
         <div className="flex justify-center items-center h[40vh]">
          <motion.div 
            ref={ref}
            style={{
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
              transition: 'opacity 0.5s, scale 0.5s',
            }}
            className="h-[40vh] w-[50vw] text-center py-10 my-10 bg-[#754E4E] grid grid-cols-3 items-center rounded-lg"
          >
            {data.map((dataItem, index) => (
              <div key={index}>
                <Number from={0} to={dataItem.val} title={dataItem.title} />
              </div>
            ))}       
          </motion.div>
        </div>
      </>  
    );
  };