import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

const AnimatedWhiteText = ({text,className}) => {
  const textWrapperRef = useRef(null);
  const textRef = useRef(null);
  useGSAP(() => {
    const textRefSplit = new SplitType(textRef.current, {
      types: "lines,words",
      lineClass: "line-wrapper"
    });

    gsap.from(textRefSplit.lines, {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: textWrapperRef.current,
        start: "-20% bottom", 
        scrub:1
      },
    });
  }, []);

  return (
    <div ref={textWrapperRef} className="overflow-hidden w-full    ">
      <h1 ref={textRef} style={{ fontFamily: "'Afacad Flux', serif" }} className={className}>
        {text}
      </h1>
    </div>
  )
}

export default AnimatedWhiteText