
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

export const NavLiVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export const NavUlVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  },
  closed: {
    x: '-100%',
    opacity: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export const NavHamUlVariants ={
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
}

export const contactHeader = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

