import { MotionInterface } from "./MotionInterface"
import { motion } from 'framer-motion';


export const MotionDiv : React.FC<MotionInterface> = ({initial, animate, transition, className , children}) => {
  return (
    <motion.div
        initial={initial}
        animate={ animate }
        transition={ transition}
        className={className}
>
{children}
</motion.div>
  )
}
