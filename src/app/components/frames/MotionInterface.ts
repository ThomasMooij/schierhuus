import { Variants } from "framer-motion";

export interface MotionInterface {
    initial: Variants | any;
    animate: Variants | any;
    transition: Object;
    className: string;
    title?: string;
    variants?: Variants;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; 

}