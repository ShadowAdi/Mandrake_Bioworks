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
      img: "/Placeholder.jpg"
    },
    {
      title: "Hyper Speed Precision Breeding",
      desc: "A state-of-the-art breeding platform blends novel gene editing methods with accelerated plant growth techniques to quickly embed desirable traits directly into top-performing crops",
      img: "/Placeholder.jpg"
    },
    {
      title: "Predictive Crop Performance",
      desc: "Digital simulations rapidly predict crop performance in diverse environments. We combine genetic, weather, soil, and climate data, to precisely match the ideal crop variety to specific locations—dramatically reducing timelines & costly field trials.",
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
      className="relative flex flex-col items-center w-full min-h-[100vh] py-8 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-cover  bg-center justify-around bg-no-repeat gap-6 "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <AnimatedText
        divClassName="w-full  sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-green-700"
        className="uppercase leading-tight font-bold text-center text-white text-heading-sm sm:text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-lg 2xl:text-heading-2xl "
        text="At Mandrake, we’re re-inventing crop development from the ground up "
      />
      <div className="flex flex-col flex-1 md:flex-[0.5] md:flex-row  justify-end items-center w-full mt-2 sm:mt-3 md:mt-4 lg:mt-5  pb-6 md:pb-0  gap-5 md:gap-6 lg:gap-7 xl:gap-8 lg:w-[90%] xl:w-[80%] mx-auto">
        <div
          ref={textRef}
          className="flex  flex-col gap-2  items-center md:items-start text-center md:text-left justify-center opacity-100 transition-opacity md:flex-1  px-4 sm:px-0"
        >
          <h3 className="text-subheading-sm sm:text-subheading md:text-subheading-md lg:text-subheading-lg xl:text-subheading-xl 2xl:text-subheading-2xl 3xl:text-subheading-3xl 2xl:text-subheading-2xl text-white font-semibold">
            {steps[0].title}
          </h3>
          <p  className="text-left text-white font-normal w-full text-para-sm sm:text-para-sm md:text-para-md lg:text-para-lg xl:text-para-xl 2xl:text-para-2xl leading-relaxed">
            {steps[0].desc}
          </p>
        </div>
        <div className="flex items-center justify-end md:flex-1 h-36 sm:h-56 md:h-64 lg:h-80 xl:h-96 mt-1 md:mt-0 ">
          <img
            ref={imageRef}
            className="h-full w-full max-w-md object-contain transition-transform transition-opacity duration-500"
            alt="AI Genetic Prospecting Visualization"
            src={steps[0].img}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3Part1;