import { useState } from "react";
import { TestimonialData } from "../data/testimonial";

interface TestimonialProps {
  testimonial: TestimonialData;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  const [showModal, setShowModal] = useState(false);

  const { imageSrc, name, position, full } = testimonial;

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const fullElements = full.split("<br/>").map((text, index) => (
    <div key={index}>
      <div className="my-2">
        {text}
        <br />
      </div>
    </div>
  ));

  return (
    <>
      <div
        className="p-6 rounded-md shadow-md bg-gray-50 cursor-pointer"
        onClick={openModal}
      >
        <p>{fullElements}</p>
        <div className="flex items-center mt-4 space-x-4">
          <img
            src={imageSrc}
            alt=""
            className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
          />
          <div>
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{position}</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="flex flex-col max-w-lx mx-8 my-6 shadow-lg "
            onClick={handleModalClick}
          >
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-[#005cd8]"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                {full}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-[#005cd8]"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#004AAD] text-gray-50">
              <img
                src={imageSrc}
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500"
              />
              <p className="text-xl font-semibold leading-tight">{name}</p>
              <p className="text-sm items-center text-center">{position}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonial;
