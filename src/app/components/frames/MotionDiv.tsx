"use client"
import { MotionInterface } from "./MotionInterface"
import { motion } from 'framer-motion';


export const MotionDiv : React.FC<MotionInterface> = ({initial, animate, transition, className , variants,  children, onClick}) => {
  return (
    <motion.div
        initial={initial}
        animate={ animate }
        transition={ transition}
        className={className}
        variants={variants}
        onClick={onClick}
          >
          {children}
    </motion.div>
  )
}
