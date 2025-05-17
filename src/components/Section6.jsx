import AnimatedText from './AnimatedText';
import { CardComponent } from "../components/CardComponents";
import { useState } from 'react';
import PopupForm from './PopupForm';
const Section6 = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [clickPosition, setClickPosition] = useState(null);

    const handleButtonClick = (e) => {
        setClickPosition({
            x: e.clientX,
            y: e.clientY
        });
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <section
                className="flex flex-col items-center w-full mx-auto justify-around relative py-2 md:py-4 space-y-8 min-h-[100dvh] "
            >
                <div className='w-[90%]    flex pt-4 md:pt-6 pb-6 flex-col items-center mx-auto  space-y-4 sm:space-y-12 justify-around flex-1'>
                    <AnimatedText
                        className=" text-2xl   sm:text-4xl md:text-5xl 2xl:text-9xl  uppercase font-bold text-left md:text-center text-white"
                        text="Let's unlock Nature's Potential"
                    />

                    <div className='w-[96%] md:w-full mx-auto  justify-items-center  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-6 lg:gap-x-8 xl:gap-x-12'>
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
                            handleButtonClick={handleButtonClick}

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
                            handleButtonClick={handleButtonClick}


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
                            handleButtonClick={handleButtonClick}

                        />
                    </div>
                </div>

            </section>
            <PopupForm
                isOpen={isPopupOpen}
                onClose={closePopup}
                clickPosition={clickPosition}
            />
        </>
    );
};

export default Section6;