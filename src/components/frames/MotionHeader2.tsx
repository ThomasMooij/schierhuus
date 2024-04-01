"use client"
import { motion } from 'framer-motion';
import { MotionInterface } from './MotionInterface';

export const MotionHeader2 : React.FC<MotionInterface> = ({initial, animate, transition, className , title}) => {
  return (
    <motion.h2
      initial={initial}
      animate={ animate }
      transition={ transition}
      className={className}
    >
      {title}
    </motion.h2>
  )
}
