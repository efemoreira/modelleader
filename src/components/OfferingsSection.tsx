import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import STR_CONSTANTS from "../assets/strings";
import ServiceComponent from "./ServiceComponent";

const OfferingsSection: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#465d80be] via-[#cbeff7a4] to-[#417a7ca9] w-full min-h-screen justify-center">
      <div className="flex flex-row w-full md:w-1/2 p-4 md:p-20">
        <AnimationOnScroll
          className="w-full"
          animateIn="animate__fadeInLeftBig"
        >
          <div className="w-1/2 mt-10">
            <div className="bg-black h-1 w-6" />
            <h1 className="text-left text-3xl md:text-5xl font-bold">
              How
              <br />
              <strong>We Can</strong>
              <br />
              Help You
            </h1>
          </div>
        </AnimationOnScroll>
      </div>
      <section
        className={`flex ${
          isMobile ? "flex-col space-y-4" : "flex-row"
        }   w-full p-4 md:p-10`}
      >
        <AnimationOnScroll
          className={isMobile ? "min-w-full" : "w-full"}
          animateIn="animate__fadeInUp"
        >
          <ServiceComponent
            title={STR_CONSTANTS.OFFERING_1_TITLE}
            description={STR_CONSTANTS.OFFERING_1_DESCRIPTION}
            icon="fas fa-lightbulb"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          className={isMobile ? "min-w-full" : "w-full"}
          animateIn="animate__fadeInUp"
          delay={200}
        >
          <ServiceComponent
            title={STR_CONSTANTS.OFFERING_2_TITLE}
            description={STR_CONSTANTS.OFFERING_2_DESCRIPTION}
            icon="fas fa-briefcase"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          className={isMobile ? "min-w-full" : "w-full"}
          animateIn="animate__fadeInUp"
          delay={400}
        >
          <ServiceComponent
            title={STR_CONSTANTS.OFFERING_3_TITLE}
            description={STR_CONSTANTS.OFFERING_3_DESCRIPTION}
            icon="fas fa-briefcase"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          className={isMobile ? "min-w-full" : "w-full"}
          animateIn="animate__fadeInUp"
          delay={600}
        >
          <ServiceComponent
            title={STR_CONSTANTS.OFFERING_4_TITLE}
            description={STR_CONSTANTS.OFFERING_4_DESCRIPTION}
            icon="fas fa-briefcase"
          />
        </AnimationOnScroll>
      </section>
    </div>
  );
};

export default OfferingsSection;
