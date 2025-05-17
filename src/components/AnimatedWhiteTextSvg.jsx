import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

const AnimatedWhiteTextSvg = ({
    text,
    className,
    numWordsToOverlay = 0, // ← Add this
}) => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const split = new SplitType(textRef.current, {
            types: "lines, words",
            lineClass: "line-wrapper",
        });

        const wordsToAnimate = [];
        const overlays = [];


        split.lines.forEach((line) => {
            const allWords = Array.from(line.querySelectorAll('.word'));
            if (numWordsToOverlay === 0 || allWords.length === 0) return;

            let count = 0;
            const wrapper = document.createElement("div");
            wrapper.className = "relative w-fit inline-block isolate"; // isolate helps manage stacking context

            line.insertBefore(wrapper, allWords[0]);

            for (let i = 0; i < allWords.length && count < numWordsToOverlay; i++) {
                const word = allWords[i];

                if (word.nodeType === 1 && word.classList.contains("word")) {
                    word.classList.add("relative", "z-10"); // ← ensure word is above overlay
                    wrapper.appendChild(word);
                    wordsToAnimate.push(word);
                    count++;

                    if (count < numWordsToOverlay) {
                        wrapper.appendChild(document.createTextNode(" "));
                    }
                }
            }

            const overlay = document.createElement("div");
            overlay.className =
                "absolute left-0 top-1/2 h-[calc(50%+10px)] bg-gradient-to-r from-[#e0f4eb] via-[#b8e8e5] to-[#90dadc] opacity-60 rounded-sm pointer-events-none";
            overlay.style.transformOrigin = "left";
            overlay.style.transform = "scaleX(0)";
            overlay.style.width = "100%";
            overlay.style.zIndex = "0"; // ← ensures it's behind
            wrapper.appendChild(overlay);
            overlays.push(overlay);
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textWrapperRef.current,
                start: "top bottom",
            },
        });

        // 1. Animate text from below
        tl.from(wordsToAnimate, {
            yPercent: 100,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.1,
        });

        // 2. Animate overlay scaleX
        tl.to(
            overlays,
            {
                scaleX: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
            },
            ">-0.1" // Start a bit before text ends
        );
    }, [text, numWordsToOverlay]);

    return (
        <div ref={textWrapperRef} className="relative overflow-hidden 
                w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto">
            <h1
                ref={textRef}
                style={{ fontFamily: "'Afacad Flux', serif" }}
                className={`${className} whitespace-pre-wrap z-[70]`}
            >
                {text}
            </h1>
        </div>
    );
};


export default AnimatedWhiteTextSvg