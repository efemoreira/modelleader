import { AnimationOnScroll } from "react-animation-on-scroll";
import STR_CONSTANTS from "../assets/strings";
import ServiceComponent from "./ServiceComponent";

const OfferingsSection: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex flex-col bg-[#ffffff4d] w-full min-h-[80vh] justify-center">
      <div className="flex flex-row w-full p-4 md:p-18">
        <AnimationOnScroll
          className="w-full flex flex-col justify-end"
          animateIn="animate__fadeInLeftBig"
        >
          <div className="md:w-2/5 mt-10 mr-20 self-end">
            <h1 className="text-left text-3xl md:text-5xl text-[#192753] font-roboto font-thin">
              Our Offerings
            </h1>
          </div>
          <div className="md:w-8/12 self-end text-center">
            <p className="text-[#192753] text-lg md:text-xl mt-4 mr-8 text-center">
              We bring world-class leadership development services and resources
              to <br />
              the leaders who shape society.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
      <section
        className={`flex ${
          isMobile ? "flex-col space-y-4" : "flex-row"
        }   w-4/5 p-4 md:p-10 items-center justify-center self-center`}
      >
        {STR_CONSTANTS.OFFERINGS.map((offering) => (
          <AnimationOnScroll
            key={offering.id}
            className={isMobile ? "min-w-full" : "w-3/4 p-4"}
            animateIn="animate__fadeInUp"
            delay={offering.delay}
          >
            <ServiceComponent
              title={offering.title}
              description={offering.description}
              icon={offering.icon}
              link={offering.link}
            />
          </AnimationOnScroll>
        ))}
      </section>
    </div>
  );
};

export default OfferingsSection;
