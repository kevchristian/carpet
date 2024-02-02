"use client";
import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  title: string;
}

const Number: React.FC<CounterProps> = ({ from, to, title }) => {
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
            <h1 className="text-xl">Over</h1>
            <motion.p
                ref={nodeRef}
                initial={{ opacity: 0, scale: 0.1 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 3 }}
                style={{ fontSize: '2em' }}
                className="text-lg my-5"
             />
            <h1 className="text-3xl font-bold">{title}</h1>           
      </>
    );
  };
  
  export default Number;