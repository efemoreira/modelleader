import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import STR_CONSTANTS from "../assets/strings";
import PhilosophyComponent from "./PhilosophyComponent";

const PhilosophiesSection = () => {
  const philosophies = STR_CONSTANTS.PHILOSOPHIES;
  return (
    <div
      id="philosophy"
      className="flex flex-col justify-center items-center p-10 "
    >
      <AnimationOnScroll className="w-full" animateIn="animate__fadeInUp">
        <div className="w-1/2 mt-10">
          <div className="bg-black h-1 w-6" />
          <h1 className="text-left text-3xl md:text-5xl font-bold">
            Our
            <br />
            Philosophy
          </h1>
        </div>
      </AnimationOnScroll>
      {philosophies.map((philosophy) => {
        return (
          <PhilosophyComponent
            key={philosophy.id}
            number={philosophy.id}
            text={philosophy.text}
            image={philosophy.image}
            imagePosition={philosophy.imgPosition === "left" ? "left" : "right"}
          />
        );
      })}
    </div>
  );
};

export default PhilosophiesSection;
