import React from 'react';
import AnimatedText from './AnimatedText';
import { CardComponent } from "../components/CardComponents";
const Section6 = () => {
    return (
        <section
            className="flex flex-col items-center w-full mx-auto justify-center relative py-4 md:py-16 space-y-8 min-h-screen"
        >
            <div className='w-[90%] max-w-7xl flex pt-4 md:pt-14 pb-8 flex-col items-center mx-auto space-y-12 justify-around'>
                <AnimatedText
                    className="text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl uppercase font-extrabold text-center text-white"
                    text="Let's unlock Nature's Potential"
                />

                <div className='w-full grid grid-cols-1 xl:grid-cols-3 gap-14 justify-items-center'>
                    <CardComponent
                        title="Supercharge your Elite Varieties"
                        category="Seed companies"
                        description="Mandrake Bioworks accelerates your breeding programs— identifying, engineering, and testing valuable traits with unprecedented speed. Enhance your competitive advantage and slash time-to-market with our breakthrough platform."
                    />
                    <CardComponent
                        title="Scale Ingredients Sustainably"
                        category="Food companies"
                        description="Access our platform to discover and develop plant-based ingredients with superior functionality and sensory profiles. Meet consumer demands while achieving sustainability goals with our cutting-edge bioprospecting approach."
                    />
                    <CardComponent
                        title="Revolutionize Plant Discovery"
                        category="Research institutions"
                        description="Leverage our automated platform to accelerate plant genetics research. Identify novel traits and compounds faster than traditional methods, unlocking new possibilities for agriculture, nutrition, and climate resilience."
                    />
                </div>
            </div>
        </section>
    );
};

export default Section6;