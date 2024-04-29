
export const aboutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

 export  const sliderVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

 export const FacilityCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

 export const FacilityTextVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1, // corrected from '2' to '1' for a valid opacity value
    x: 0,
    transition: {
      duration: 1.0, // duration in seconds, adjust as needed
      ease: "easeInOut" // easing function for a smoother effect
    }
  },
};