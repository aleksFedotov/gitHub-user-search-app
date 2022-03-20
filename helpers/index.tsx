import React from 'react';

import { motion, Variants } from 'framer-motion';

// variants for framer motion
export const senteceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.25,
      staggerChildren: 0.04,
    },
  },
};

export const latterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const wordAnimation = (str: string): any[] => {
  const splitedString = str.split('');
  return splitedString.map((char: string, index: number) => (
    <motion.span key={`${char}-${index}`} variants={latterVariants}>
      {char}
    </motion.span>
  ));
};
