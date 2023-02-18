import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface AboutSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition: "left" | "right";
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  imageSrc,
  imagePosition,
}) => {
  const isImageOnLeft = imagePosition === "left";

  const titleElements = title.split("<br/>").map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  const descriptionElements = description.split("<br/>").map((text, index) => (
    <React.Fragment key={index}>
      <div className="my-3">
        {text}
        <br />
      </div>
    </React.Fragment>
  ));

  const Image = () => (
    <div className="w-full md:w-1/2 ">
      <AnimationOnScroll
        className="h-full"
        animateIn={`animate__fadeIn${isImageOnLeft ? "Left" : "Right"}Big`}
      >
        <img className="object-cover h-full" src={imageSrc} />
      </AnimationOnScroll>
    </div>
  );

  const Text = () => (
    <div
      className={`w-full md:w-1/2 ${
        isImageOnLeft ? "md:pr-20" : "md:pl-20"
      } flex flex-col justify-center space-y-4 py-8 `}
    >
      <div className="mx-10 space-y-4">
        <AnimationOnScroll
          animateIn={`animate__fadeIn${isImageOnLeft ? "Right" : "Left"}Big`}
        >
          <div>
            <div className="flex bg-black h-1 w-6" />
            <h1 className="text-left text-3xl md:text-5xl font-bold w-full">
              {titleElements}
            </h1>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          className="space-y-4"
          animateIn={`animate__fadeIn${isImageOnLeft ? "Right" : "Left"}Big`}
        >
          <div className="text-justify">{descriptionElements}</div>
        </AnimationOnScroll>
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap w-full min-h-screen">
      {isImageOnLeft ? (
        <>
          <Image />
          <Text />
        </>
      ) : (
        <>
          <Text />
          <Image />
        </>
      )}
    </div>
  );
};

export default AboutSection;
