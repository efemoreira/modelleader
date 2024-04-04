import { AnimationOnScroll } from "react-animation-on-scroll";

interface PhilosophyProps {
  firstText: string;
  text: string;
  image: React.ReactNode;
  imagePosition: "left" | "right";
}

const PhilosophyComponent: React.FC<PhilosophyProps> = ({
  firstText,
  text,
  image,
  imagePosition,
}) => {
  const isImageOnLeft = imagePosition === "left";

  return (
    <AnimationOnScroll
      className="flex flex-col md:flex-row items-center justify-center w-5/6 max-w-[90vw]"
      animateIn={`animate__fadeIn${isImageOnLeft ? "Left" : "Right"}`}
    >
      <h1>
        <span className="text-lg md:text-2xl font-bold text-[#004AAD]">
          {firstText}
        </span>{" "}
        <span className="text-base md:text-xl text-[#004AAD]">{text}</span>
      </h1>
      <div
        className={`md:mt-0 max-w-[90vw] ${
          isImageOnLeft ? "md:mr-2 md:order-first" : "md:ml-2 md:order-last"
        }`}
      >
        {image}
      </div>
    </AnimationOnScroll>
  );
};

export default PhilosophyComponent;
