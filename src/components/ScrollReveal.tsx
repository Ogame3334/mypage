import { useRef, useEffect, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  move?: string;
}

export default function ScrollReveal({children, move}: ScrollRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        //Dynamic import
        const sr = (await import("scrollreveal")).default
        sr().reveal(sectionRef.current, {
          delay: 0,
          opacity: 0,
          origin: 
          move === "left"
            ? "left"
            : move === "right"
              ? "right"
              : move === "top"
                ? "top"
                : "bottom",
          distance: "0px",
          reset: true,
          scale: 0.8,
          duration: 500
        })
      }
    }
    animate()
  }, [move, sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};
