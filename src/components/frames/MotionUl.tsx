"use client"
import { MotionInterface } from "./MotionInterface"
import { motion } from 'framer-motion';


export const MotionUl : React.FC<MotionInterface> = ({className , variants,  children} ) => {
  return (
    <motion.ul
        variants={variants}
        className={className}
          >
          {children}
    </motion.ul>
  )
}
