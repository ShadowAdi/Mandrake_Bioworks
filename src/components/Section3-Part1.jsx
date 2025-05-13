import React, { useRef } from 'react';
import bgImage from "/Gradient.jpg";
import AnimatedText from './AnimatedText';
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
      img: "/PNG-1.png"
    },
    {
      title: "Hyper Speed Precision Breeding",
      desc: "A state-of-the-art breeding platform blends novel gene editing methods with accelerated plant growth techniques to quickly embed desirable traits directly into top-performing crops",
      img: "/PNG-2.png"
    },
    {
      title: "Predictive Crop Performance",
      desc: "Digital simulations rapidly predict crop performance in diverse environments. We combine genetic, weather, soil, and climate data, to precisely match the ideal crop variety to specific locations—dramatically reducing timelines & costly field trials.",
      img: "/PNG-3.png"
    }
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          pinSpacing: true,
          scrub: true,
        }
      });

      steps.forEach((step, i) => {
        if (i === 0) return;
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
      className="relative  min-h-[100vh] flex items-center py-5 justify-between md:py-14 bg-cover  bg-center  bg-no-repeat w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='flex flex-col  items-center w-full 2xl:w-[90%]    mx-auto justify-between h-full gap-4 md:gap-10 '>
      <AnimatedText
        divClassName="w-full "
        className="uppercase font-bold text-center text-white text-xl  sm:text-3xl md:text-3xl 2xl:text-7xl "
        text="At Mandrake, we’re re-inventing crop development from the ground up "
      />
      <div className="flex  flex-col flex-[0.6] md:flex-1 md:flex-row  justify-between md:justify-around px-6 items-center  w-full xl:w-[80%] mx-auto ">
        <div
          ref={textRef}
          className="flex flex-1  flex-col md:items-start md:justify-start items-center justify-center gap-2 transition-opacity md:flex-1  px-4 sm:px-0 2xl:gap-5"
        >
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl md:text-left text-center  text-white font-semibold">
            {steps[0].title}
          </h3>
          <p  className="md:text-left text-center text-[10px] sm:text-base lg:text-lg xl:text-xl 2xl:text-4xl  text-white font-normal w-full sm:w-[90%]  leading-normal 2xl:leading-relaxed">
            {steps[0].desc}
          </p>
        </div>
        <div className="flex  justify-end  md:flex-[0.6]   h-60 sm:h-72 lg:h-80 xl:h-96 2xl:h-[36rem]">
          <img
            ref={imageRef}
            className="h-full w-full max-w-md object-contain transition-transform transition-opacity duration-500"
            alt="AI Genetic Prospecting Visualization"
            src={steps[0].img}
          />
        </div>
      </div>

      </div>
    </section>
  );
};

export default Section3Part1;