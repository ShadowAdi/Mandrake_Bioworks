import React, { useRef } from 'react';
import bgImage from "/Gradient.jpg";
import AnimatedText from './AnimatedText';
import AnimatedWhiteText from './AnimatedWhiteText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3Part1 = () => {
  const sectionRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  const steps = [
    {
      title: "AI-Led Genetic Prospecting",
      desc: "Cutting-edge AI algorithms quickly analyze vast Omics datasets, pinpointing genes linked to resilience, nutrition, yield, and adaptability.",
      img: "/Placeholder.jpg"
    },
    {
      title: "Precision Bioengineering",
      desc: "We deploy AI to design crop blueprints with exact traits using a trait-first approach, optimizing for region and soil.",
      img: "/Placeholder.jpg"
    },
    {
      title: "Automated Field Testing",
      desc: "Smart sensors and models run real-time simulations in virtual plots to validate seed performance before field trials.",
      img: "/Placeholder.jpg"
    }
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
  pinSpacing: true, 
          scrub: true,
        }
      });

      steps.forEach((step, i) => {
        const img = imageRef.current;
        const txt = textRef.current;

        tl.to(txt, { autoAlpha: 0, duration: 0.3 }, i)
          .to(img, { autoAlpha: 0, scale: 0.8, duration: 0.3 }, `<`)
          .add(() => {
            txt.querySelector("h3").textContent = steps[i].title;
            txt.querySelector("p").textContent = steps[i].desc;
            img.src = steps[i].img;
          })
          .to(txt, { autoAlpha: 1, duration: 0.3 })
          .to(img, { autoAlpha: 1, scale: 1, duration: 0.3 }, `<`);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center w-full mx-auto py-4 px-4 lg:justify-center justify-around relative gap-12 xl:gap-24 min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Constant heading */}
        <AnimatedText text={"At Mandrake, we’re re-inventing crop development from the ground up"} />

      {/* Content that changes */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:w-[80%] lg:w-[70%]'>
        <div
          ref={textRef}
          className='flex flex-col gap-3 items-center md:items-start text-center md:text-left justify-center opacity-100 transition-opacity lg:gap-6'
        >
          <h3 className="whitespace-nowrap text-base md:text-xl lg:text-4xl text-white font-semibold px-4 md:px-0">
            {steps[0].title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-white md:leading-5 max-w-md px-4 md:px-0 w-full">
            {steps[0].desc}
          </p>
        </div>

        <div className='flex items-center justify-center h-28 md:h-64 lg:h-72 mt-0'>
          <img
            ref={imageRef}
            className='h-full w-full object-contain transition-transform transition-opacity duration-500'
            alt='AI Genetic Prospecting Visualization'
            src={steps[0].img}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3Part1;
