import { Variants } from "framer-motion";

export interface MotionInterface {
    initial: Variants | any;
    animate: Variants | any;
    transition: Object;
    className: string;
    title?: string;
    variants?: Variants; // Ensure it accepts Variants type
    children?: React.ReactNode;
}