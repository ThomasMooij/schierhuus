"use client"
import { MotionInterface } from './MotionInterface'
import { motion } from 'framer-motion'


export const MotionParagraph: React.FC<MotionInterface> = ({initial, animate, transition, className , title}) => {
  return (
    <motion.p
        initial={initial}
        animate={ animate }
        transition={ transition}
        className={className}
    >
    {title}
    </motion.p>
  )
}
