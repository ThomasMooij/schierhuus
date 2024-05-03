"use client"
import { MotionInterface } from "./MotionInterface"
import { motion } from 'framer-motion';


export const MotionNav : React.FC<MotionInterface> = ({initial, animate, transition, className , variants,  children, onClick}) => {
  return (
    <motion.nav
        layout
        initial={initial}
        animate={ animate }
        transition={ transition}
        className={className}
        variants={variants}
        onClick={onClick}
          >
          {children}
    </motion.nav>
  )
}
