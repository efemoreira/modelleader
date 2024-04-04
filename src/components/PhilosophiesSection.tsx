import { AnimationOnScroll } from "react-animation-on-scroll";
import STR_CONSTANTS from "../assets/strings";
import PhilosophyComponent from "./PhilosophyComponent";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import { ReactComponent as ML1 } from "../assets/wiaml1.svg";
import { ReactComponent as ML2 } from "../assets/wiaml2.svg";
import { ReactComponent as ML3 } from "../assets/wiaml3.svg";

const getMLIcon = (id: number) => {
  switch (id) {
    case 1:
      return ML1;
    case 2:
      return ML2;
    case 3:
      return ML3;
    default:
      return MLIcon;
  }
};

const PhilosophiesSection = () => {
  const philosophies = STR_CONSTANTS.PHILOSOPHIES;
  return (
    <div className="flex flex-col justify-center items-center p-4 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 md:w-96 h-1/3 md:h-96">
        <MLIcon className="absolute top-[-150%] right-[-120%] fill-[#1927533b] " />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 md:w-96 h-1/3 md:h-96">
        <MLIcon className="absolute bottom-[-150%] left-[-120%] fill-[#1927533b] " />
      </div>
      <AnimationOnScroll className="max-w-[90vw]" animateIn="animate__fadeInUp">
        <div className="max-w-[90vw] md:w-[80vw] m-10">
          <h1 className="text-left text-4xl md:text-5xl w-full text-[#004AAD] font-roboto font-thin">
            What is a model leader?
          </h1>
        </div>
      </AnimationOnScroll>
      {philosophies.map((philosophy) => {
        const MLIconComponent = getMLIcon(philosophy.id);
        return (
          <PhilosophyComponent
            key={philosophy.id}
            text={philosophy.text}
            firstText={philosophy.fistText}
            image={<MLIconComponent className="max-w-[90vw]" />}
            imagePosition={philosophy.imgPosition === "left" ? "left" : "right"}
          />
        );
      })}
    </div>
  );
};

export default PhilosophiesSection;
