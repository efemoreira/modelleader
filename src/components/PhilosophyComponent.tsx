import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface PhilosophyProps {
  number: number;
  text: string;
  image: string;
  imagePosition: "left" | "right";
}

const PhilosophyComponent: React.FC<PhilosophyProps> = ({
  number,
  text,
  image,
  imagePosition,
}) => {
  const isImageOnLeft = imagePosition === "left";
  const isMobile = window.innerWidth < 768;

  return (
    <AnimationOnScroll
      className="flex flex-col md:flex-row items-center mb-8 justify-center mx-4 w-5/6"
      animateIn={`animate__fadeIn${isImageOnLeft ? "Left" : "Right"}`}
    >
      <div
        className={`flex relative md:mr-4  text-[#3b3e463f] text-9xl font-serif italic align-top top-[-24px] ${
          isMobile
            ? "order-first right-[-50px]"
            : isImageOnLeft
            ? "order-last left-[-50px]"
            : "order-first right-[-50px]"
        }`}
      >
        {number}
      </div>
      <div className="text">
        <h3 className="text-lg text-center font-bold mb-2">{text}</h3>
      </div>
      <div
        className={`image mt-4 md:mt-0 ${
          isMobile
            ? "order-last ml-2"
            : isImageOnLeft
            ? "order-first mr-2"
            : "order-last ml-2"
        } `}
      >
        <img
          src={image}
          alt={`Philosophy ${number} image`}
          className="w-40 h-40 object-cover rounded-lg"
        />
      </div>
    </AnimationOnScroll>
  );
};

export default PhilosophyComponent;
