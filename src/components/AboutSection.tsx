import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";

interface AboutSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition: "left" | "right";
  hasMore?: boolean;
  back?: boolean;
  showed?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  imageSrc,
  imagePosition,
  hasMore = false,
  back = false,
  showed = false,
}) => {
  const isImageOnLeft = imagePosition === "left";

  const titleElements = title.split("<br/>").map((text, index) => (
    <div key={index}>
      {text}
      <br />
    </div>
  ));

  const descriptionElements = description.split("<br/>").map((text, index) => (
    <div key={index}>
      <div className="my-3">
        {text}
        <br />
      </div>
    </div>
  ));

  const Image = () => (
    <div className="flex flex-col w-full md:w-1/2 justify-center p-14">
      <AnimationOnScroll
        offset={0}
        animatePreScroll
        className="flex flex-col h-5/6 justify-center"
        animateIn={`animate__fadeIn${isImageOnLeft ? "Left" : "Right"}Big`}
        initiallyVisible={showed}
      >
        <img
          className="flex flex-col object-cover rounded-md justify-center self-center"
          src={imageSrc}
          alt={`${title}`}
        />
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
          offset={0}
          animatePreScroll
          initiallyVisible={showed}
        >
          <div>
            <h1 className="text-left text-4xl md:text-5xl w-full text-[#003b8a] font-roboto font-thin">
              {titleElements}
            </h1>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          className="space-y-8"
          animateIn={`animate__fadeIn${isImageOnLeft ? "Right" : "Left"}Big`}
          offset={0}
          animatePreScroll
          initiallyVisible={showed}
        >
          <div className="text-base mb-8 md:text-xl text-[#004AAD]">
            {descriptionElements}
          </div>
          {hasMore ? (
            <Link
              to="/about"
              aria-label=""
              className="mt-3 rounded border border[#004AAD] px-12 py-3 text-sm font-medium text-[#004AAD] hover:bg-[#004AAD] hover:text-white focus:outline-none focus:ring active:bg-[#04827e] sm:w-auto"
            >
              Learn more
            </Link>
          ) : null}
        </AnimationOnScroll>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden">
      {back ? (
        <div className="absolute top-0 left-0 w-96 h-96">
          <MLIcon className="absolute top-[-150%] right-[-150%] fill-[#1927533b] " />
        </div>
      ) : null}

      <div className="flex flex-wrap w-full min-h-[70vh]">
        {isImageOnLeft ? (
          <div className="flex flex-col-reverse md:flex-row ">
            <Image />
            <Text />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row ">
            <Text />
            <Image />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
