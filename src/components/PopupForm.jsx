// components/PopupForm.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PopupForm = ({ isOpen, onClose, clickPosition }) => {
  const overlayRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.set(overlayRef.current, { 
        display: 'flex',
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(40, 39, 52, 0)'
      });
      
      gsap.to(overlayRef.current, { 
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(40, 39, 52, 0.7)', 
        duration: 0.4 
      });
      
      // Position and animate the form
      if (clickPosition) {
        gsap.set(formRef.current, {
          scale: 0.5,
          opacity: 0,
          y: clickPosition.y - window.scrollY,
          x: 0,
          transformOrigin: 'center'
        });
      } else {
        gsap.set(formRef.current, {
          scale: 0.5,
          opacity: 0,
          transformOrigin: 'center'
        });
      }
      
      // Animate the form
      gsap.to(formRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.5)',
        y: 0,
        x: 0
      });
    } else if (overlayRef.current) {
      // Fade out the background
      gsap.to(overlayRef.current, { 
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(40, 39, 52, 0)', 
        duration: 0.3 
      });
      
      // Hide the form
      gsap.to(formRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.4,
        ease: 'back.in(1.5)',
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none' });
        }
      });
    }
  }, [isOpen, clickPosition]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-screen   z-[9999] flex items-center justify-center"
      style={{ 
        display: 'none',
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(40, 39, 52, 0)'
      }}
      onClick={(e) => {
        if (e.target === overlayRef.current) {
          onClose();
        }
      }}
    >
      <div 
        ref={formRef}
        className="w-[94%] max-w-2xl 2xl:max-w-4xl mx-auto  my-auto h-auto sm:h-[95%] xl:h-max rounded-xl overflow-y-auto relative  "
        style={{
          backgroundColor: 'rgba(40, 39, 52, 0.95)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <form
          action="https://formsubmit.co/aditya.shukla@mandrakebio.com"
          method="POST"
          className="w-full flex flex-col  gap-4 mx-auto text-start text-white p-6 2xl:p-8"
          onSubmit={(e) => {
            setTimeout(() => {
              e.target.reset();
            }, 100);
          }}
        >
          <div className="w-full flex items-center justify-between">
            <h2 className="text-lg lg:text-xl 2xl:text-5xl font-bold">Contact Us</h2>
            <button
              type="button"
              className="h-8 w-8 2xl:h-12 2xl:w-12 bg-[#807F87] rounded-full flex items-center justify-center text-[#282734] text-2xl 2xl:text-4xl"
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
            <div key={idx} className="flex flex-col w-full items-start gap-2 2xl:gap-4">
              <label className="text-white text-base lg:text-lg 2xl:text-2xl">{label}</label>
              {type === 'input' ? (
                <input
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  required
                  className="px-4 py-1 2xl:py-3 w-full outline-0 border-0 text-base 2xl:text-xl rounded-md bg-[#73727B] placeholder:text-[#A5A5A9] text-white"
                />
              ) : (
                <textarea
                  name={name}
                  placeholder={placeholder}
                  rows={2}
                  required
                  className="px-4 py-1 2xl:py-3 w-full outline-0 border-0 text-base 2xl:text-xl rounded-md bg-[#73727B] placeholder:text-[#A5A5A9] text-white"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            style={{ fontFamily: "'Poppins',sans-serif" }}
            className="px-8 w-max py-1 md:py-2  rounded-full bg-[#C4E9A2] hover:opacity-90 block transition-all hover:shadow-lg"
          >
            <span className="text-black font-semibold text-base 2xl:text-xl">Send Message</span>
          </button>

          <p className="text-white text-base 2xl:text-2xl mt-2">
            You can also reach us directly at{' '}
            <span className="underline text-[#C4E9A2] hover:text-[#D4F9B2] transition-colors">hello@mandrakebio.com</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;