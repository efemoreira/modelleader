import { useState, useEffect } from "react";
import { testimonials } from "../data/testimonial";
import { Link } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "../.firebase/firebase";

const TestimonialCarousel: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 10000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <Link
      className="w-full p-6 bg-[#ffb552] flex flex-col justify-center items-center "
      to={"/testimony"}
      onClick={() =>
        logEvent(
          analytics,
          `TestimonyCarrouselClicked_${currentTestimonial.name}`
        )
      }
    >
      <svg
        aria-hidden="true"
        className="w-12 h-12 mx-auto mb-3 text-[#003b8a] dark:text-[#003b8a]"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote className="text-center">
        <p className="text-2xl italic font-medium text-[#003b8a] dark:text-[#003b8a]">
          {currentTestimonial.quote}
        </p>
      </blockquote>
      <div className="flex items-center justify-center mt-6 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src={currentTestimonial.imageSrc}
          alt={`${currentTestimonial.name}`}
        />
        <div className="flex items-center divide-x-2 divide-[#003b8a] dark:text-[#003b8a]">
          <cite className="pr-3 font-medium text-[#003b8a] dark:text-[#003b8a]">
            {currentTestimonial.name}
          </cite>
          <cite className="pl-3 text-sm text-[#003b8a] dark:text-[#003b8a]">
            {currentTestimonial.position}
          </cite>
        </div>
      </div>
    </Link>
  );
};

export default TestimonialCarousel;
