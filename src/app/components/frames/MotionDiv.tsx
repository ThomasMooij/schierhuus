"use client"
import { MotionInterface } from "./MotionInterface"
import { motion } from 'framer-motion';


export const MotionDiv : React.FC<MotionInterface> = ({initial, animate, transition, className , variants,  children}) => {
  return (
    <motion.div
        initial={initial}
        animate={ animate }
        transition={ transition}
        className={className}
        variants={variants}
          >
          {children}
    </motion.div>
  )
}
