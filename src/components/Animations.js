export let fade = {
  show: { 
    opacity: 1,
    x: 0,
    transition: { 
      ease: "easeOut", 
      duration: 0.5,
      delay: 0.8,
      y: { type: "spring", stiffness: 100 },
      default: { duration: 2 },
    }
  },
  hidden: { 
    opacity: 0,
    x: -20,
  },
};

export const word = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.6
    }
  }
}

export const letter = {
  hidden: {
    y: "100%",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};



//// simple fade in
// export const project = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 }
// }

//// jumps out
// export const project = {
//   hidden: { scale: 0, top: 100 },
//   show: { scale: 1, top: 30 },
// }
