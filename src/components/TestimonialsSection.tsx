import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import STR_CONSTANTS from "../assets/strings";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % STR_CONSTANTS.TESTIMONIALS.length
      );
    }, 6000);

    setTimer(interval);

    return () => clearInterval(interval);
  }, [STR_CONSTANTS.TESTIMONIALS.length]);

  const renderTestimonials = () => {
    const activeTestimonial = STR_CONSTANTS.TESTIMONIALS[activeIndex];

    return (
      <div
        key={activeTestimonial.id}
        className="animate__animated animate__bounceIn"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg md:text-xl text-center mb-4">
            {activeTestimonial.text}
          </p>
          <div className="flex items-center">
            <img
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              className="h-12 w-12 rounded-full mr-4"
            />
            <p className="text-md md:text-lg font-medium">
              {activeTestimonial.name}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="experience"
      className="bg-gradient-to-r from-[#465d80be] to-[#417a7ca9] py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <AnimationOnScroll
            className="w-full"
            animateIn="animate__fadeInLeftBig"
          >
            <div className="w-1/2 mt-10">
              <div className="bg-black h-1 w-6" />
              <h1 className="text-left text-2xl md:text-4xl font-bold">
                Our
                <br />
                Testimonials
              </h1>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="flex overflow-hidden relative justify-center items-center p-4">
          <AnimationOnScroll
            className="w-full"
            animateIn="animate__fadeInRightBig"
          >
            {renderTestimonials()}
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
