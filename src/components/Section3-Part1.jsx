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
      img: "/Scientist.png"
    },
    {
      title: "Predictive Crop Performance",
      desc: "Digital simulations rapidly predict crop performance in diverse environments. We combine genetic, weather, soil, and climate data, to precisely match the ideal crop variety to specific locations—dramatically reducing timelines & costly field trials.",
      img: "/Gene.jpg"
    }
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=6000",
          pin: true,
          pinSpacing: true,
          scrub: true,
        }
      });

      steps.forEach((step, i) => {
        if (i === 0) return;

        const heading = textRef.current.querySelector(".inner-heading");
        const para = textRef.current.querySelector(".inner-para");
        const img = imageRef.current;

        // Animate current out
        tl.to(heading, { yPercent: -100, duration: 1, ease: "power2.in" }, i * 2)
          .to(para, { yPercent: -100, duration: 1, ease: "power2.in" }, `<0.2`)
          .to(img, { opacity: 0, y: -50, duration: 1, ease: "power2.in" }, `<0.2`)

          // Content update
          .add(() => {
            heading.textContent = steps[i].title;
            para.textContent = steps[i].desc;
            img.src = steps[i].img;

            gsap.set([heading, para], { yPercent: 100 });
            gsap.set(img, { opacity: 0, y: 50 });
          })

          // Animate new content in
          .to(heading, { yPercent: 0, duration: 1.2, ease: "power2.out" })
          .to(para, { yPercent: 0, duration: 1.2, ease: "power2.out" }, `<0.2`)
          .to(img, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, `<0.2`);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center w-full min-h-[100dvh] py-8 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-cover  bg-center justify-around bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <AnimatedText
        divClassName="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-green-700"
        className="text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl uppercase leading-tight font-bold text-center text-white"
        text="At Mandrake, we’re re-inventing crop development from the ground up"
      />
      <div className="flex flex-col flex-[0.5] md:flex-row justify-center items-center w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12  gap-6 md:gap-8 lg:gap-10 xl:gap-12 lg:w-[90%] xl:w-[80%] mx-auto">
        <div
          ref={textRef}
          className="flex flex-1 flex-col gap-4 items-center md:items-start text-center md:text-left justify-center opacity-100 transition-opacity flex-1 max-w-lg px-4 sm:px-0"
        >
          <div className='overflow-hidden'>
            <h3 className="inner-heading text-subheading text-white font-semibold">
              {steps[0].title}
            </h3>
          </div>
          <div className="overflow-hidden">
            <p className="inner-para text-para-sm sm:text-para-md lg:text-para-lg xl:text-para-xl text-white leading-relaxed">
              {steps[0].desc}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end flex-1 h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 mt-6 md:mt-0 overflow-hidden">
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