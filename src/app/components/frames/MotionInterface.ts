
export interface MotionInterface {
    initial: { opacity: number, y: number } | String, 
    animate: { opacity: number, y: number } | String,
    transition: Object, 
    className: string,
    title?: string,
    children?: React.ReactNode;
}
