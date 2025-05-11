import AnimatedText from './AnimatedText';
import { CardComponent } from "../components/CardComponents";
const Section6 = () => {

    return (
        <section
            className="flex flex-col items-center w-full mx-auto justify-around relative py-2 md:py-4 space-y-8 min-h-[100dvh]"
        >
            <div className='w-[90%]  flex pt-4 md:pt-6 pb-6 flex-col items-center mx-auto space-y-12 justify-around flex-1'>
                <AnimatedText
                    className="text-heading-sm sm:text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl 2xl:text-heading-3xl  uppercase font-extrabold text-center text-white"
                    text="Let's unlock Nature's Potential"
                />

                <div className='w-[90%] sm:w-[60%] mx-auto md:w-full  grid grid-cols-1 lg:grid-cols-3 gap-14 justify-items-center'>
                    <CardComponent
                        title="Supercharge your Elite Varieties"
                        category="Seed companies"
                        description="Mandrake Bioworks accelerates your
                                    breeding programs— identifying,
                                    engineering, and testing valuable traits
                                    with unprecedented speed. Enhance
                                    your competitive advantage and
                                    slash time-to-market with our
                                    breakthrough platform. "
                        cardNumber={1}
                    />
                    <CardComponent
                        title="crops perfectly tailored to needs"
                        category="Commercial Partners"
                        description="Corn optimized for biofuel. Tomatoes with
                        extended shelf life and superior flavor.
                        Potatoes engineered for flawless
                        processing. We transform agricultural
                        possibilities into commercial realities that
                        drive your bottom line.  "
                        cardNumber={2}

                    />
                    <CardComponent
                        title="Hack the code of nature itself"
                        category="Visionary Talent"
                        description="Join a team where you're not just
                        building a career— At Mandrake
                        Bioworks, you'll be at the forefront
                        of science, driving discoveries
                        that rewrite the rules of what's
                        possible, and creating abundant,
                        sustainable food for billions."
                        cardNumber={3}
                    />
                </div>
            </div>

        </section>
    );
};

export default Section6;