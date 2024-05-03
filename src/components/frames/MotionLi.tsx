"use client"
import { MotionInterface } from "./MotionInterface"
import { motion } from 'framer-motion';


export const MotionLi : React.FC<MotionInterface> = ({className , variants,  children} ) => {
  return (
    <motion.li
        variants={variants}
        className={className}
          >
          {children}
    </motion.li>
  )
}
