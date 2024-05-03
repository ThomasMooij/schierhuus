"use client"
import { MotionInterface } from "./MotionInterface"
import { motion } from 'framer-motion';


export const MotionLi: React.FC<MotionInterface> = ({ className, variants, children }) => {
  return (
    <motion.li
    whileHover={{
      rotateZ: [0, -10, 10, -10, 10, -10, 10, 0],
      transition: { duration: 1 }
    }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.li>
  )
}
