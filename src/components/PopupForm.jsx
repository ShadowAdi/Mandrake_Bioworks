// components/PopupForm.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PopupForm = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.set(popupRef.current, { display: 'flex' });
      gsap.fromTo(popupRef.current, { y: '-100%' }, { y: '0%', duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to(popupRef.current, {
        y: '-100%',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => gsap.set(popupRef.current, { display: 'none' }),
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={popupRef}
      className={`fixed top-0 left-0 w-full h-screen bg-[#282734] flex items-start justify-center 2xl:items-center py-6 z-[9999]`}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <form
        action="https://formsubmit.co/aditya.shukla@mandrakebio.com"
        method="POST"
        className="w-[94%] flex flex-col gap-4 mx-auto text-start text-white"
        onSubmit={(e) => {
          setTimeout(() => {
            e.target.reset();
          }, 100);
        }}
      >
        <div className="w-full flex items-center justify-between">
          <h2 className="text-subheading 2xl:text-5xl font-bold">Contact Us</h2>
          <button
            type="button"
            className="h-6 p-2 w-6 2xl:h-14 2xl:w-14 bg-[#807F87] rounded-full flex items-center justify-center text-[#4E4D58] 2xl:text-5xl text-2xl"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Inputs */}
        {[
          { label: 'Who Are you?', name: 'name', type: 'input', placeholder: 'Your Name' },
          { label: 'What do you work on?', name: 'work', type: 'textarea', placeholder: 'Tell us more about what you do-' },
          { label: 'How can we partner?', name: 'partner', type: 'textarea', placeholder: 'What got you excited about us?' },
          { label: 'Drop your contact!', name: 'contact', type: 'input', placeholder: 'Email or LinkedIn' },
        ].map(({ label, name, type, placeholder }, idx) => (
          <div key={idx} className="flex flex-col w-full items-start gap-2 2xl:gap-5">
            <label className="text-white text-lg 2xl:text-3xl">{label}</label>
            {type === 'input' ? (
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                required
                className="px-4 py-1 2xl:py-3 w-full outline-0 border-0 text-para-sm xl:text-para-lg rounded-md bg-[#73727B] placeholder:text-[#A5A5A9] text-white"
              />
            ) : (
              <textarea
                name={name}
                placeholder={placeholder}
                rows={2}
                required
                className="px-4 py-1 2xl:py-3 w-full outline-0 border-0 text-para-sm xl:text-para-lg rounded-md bg-[#73727B] placeholder:text-[#A5A5A9] text-white"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          style={{ fontFamily: "'Poppins',sans-serif" }}
          className="px-8 w-max py-2 md:py-3 rounded-full bg-[#C4E9A2] hover:opacity-90 block"
        >
          <span className="text-black font-semibold text-base 2xl:text-subheading">Send Message</span>
        </button>

        <p className="text-white text-lg 2xl:text-3xl">
          You can also reach us directly at{' '}
          <span className="underline text-[#A3ABB4]">hello@mandrakebio.com</span>
        </p>
      </form>
    </div>
  );
};

export default PopupForm;
