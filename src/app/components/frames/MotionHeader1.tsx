"use client"
import {motion } from 'framer-motion';
import { MotionInterface } from './MotionInterface';

export const MotionHeader1 : React.FC<MotionInterface> = ({initial, animate, transition, className , title}) => {
  return (
    <motion.h1
    initial={initial}
    animate={ animate }
    transition={ transition}
    className={className}
>
    {title}
</motion.h1>
  )
}

