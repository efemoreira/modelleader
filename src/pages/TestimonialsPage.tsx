import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import { useLayoutEffect } from "react";
import { testimonials } from "../data/testimonial";
import Testimonial from "../components/TestimonialComponent";
import { useLocation } from "react-router-dom";
import banner from "../assets/testimonialsBanner.jpeg";
import GalleryClientSection from "../components/GalleryClientSection";

const TestimonialPage: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="bg-[#ececec] w-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96">
        <MLIcon className="absolute top-[-50%] left-[-120%] fill-[#1927533b] " />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <MLIcon className="absolute bottom-[-50%] right-[-120%] fill-[#1927533b] " />
      </div>
      <div className="relative overflow-hidden">
        <img
          src={banner}
          className="mt-12 h-[70vh] w-full object-cover object-top"
          alt="TestimonialBanner"
        />
        <div className="container px-6 py-10 mx-auto">
          <div className="max-w-2xl mx-auto my-8 text-center xl:col-span-2 xl:text-left">
            <h1 className="text-left text-3xl md:text-5xl text-[#003b8a] font-roboto font-thin">
              Testimonials
            </h1>
            <p className="text-lg text-[#004AAD] mt-8">
              See what public service leaders are saying about Model Leader.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  {testimonials
                    .slice(0, Math.ceil(testimonials.length / 2))
                    .map((testimonial, index) => (
                      <Testimonial key={index} testimonial={testimonial} />
                    ))}
                </div>
                <div className="grid content-center gap-4">
                  {testimonials
                    .slice(Math.ceil(testimonials.length / 2))
                    .map((testimonial, index) => (
                      <Testimonial key={index} testimonial={testimonial} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <GalleryClientSection />
      </div>
    </section>
  );
};

export default TestimonialPage;
