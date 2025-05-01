import React, { useState } from 'react';

const CardComponent = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="flex flex-col cursor-pointer flex-1 items-center lg:items-start gap-1 md:gap-3 xl:gap-5 relative p-2 "
            style={{
                position: 'relative',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <div 
                    className="absolute pointer-events-none opacity-70"
                    style={{
                        width: '400px',
                        height: '400px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle at center, #76B1AA 0%, transparent 70%)',
                        borderRadius: '50%',
                        filter: 'blur(40px)',
                    }}
                />
            )}
            
            <span className="text-xs md:text-sm text-white font-medium text-center lg:text-left relative z-10">
                Seed companies
            </span>
            <h1 
                style={{ fontFamily: "'Afacad Flux', serif" }} 
                className="text-base md:text-xl lg:text-2xl font-bold text-white relative z-10"
            >
                Supercharge your Elite Varieties
            </h1>
            <p className="text-center lg:text-left text-white text-xs opacity-90 w-full xl:w-4/5 relative z-10 ">
                Mandrake Bioworks accelerates your breeding programs— identifying,
                engineering, and testing valuable traits with unprecedented speed. Enhance
                your competitive advantage and slash time-to-market with our
                breakthrough platform.
            </p>
            <div className="w-full flex items-center lg:items-start justify-center lg:justify-start relative z-10">
                <button className="px-4 lg:px-7 py-2 lg:py-3 rounded-full bg-white hover:opacity-90 flex items-center justify-center">
                    <span className="text-xs sm:text-sm lg:text-base text-black font-medium">
                        Get In Touch
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CardComponent;