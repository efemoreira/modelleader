import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import STR_CONSTANTS from "../assets/strings";
import ServiceComponent from "../components/ServiceComponent";
import BannerSection from "../components/BannerSection";
import banner from "../assets/offeringBanner.jpeg";

const OfferingsPage = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className=" flex flex-col bg-gray-100 min-w-[100vw] min-h-[100vh] justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96">
        <MLIcon className="absolute top-[-150%] right-[-100%] fill-[#1927533b] " />
      </div>
      <div className="flex flex-col w-full relative overflow-hidden justify-center items-center">
        <BannerSection type={"image"} src={banner} size={"45vh"} />
        <div className=" mt-[15vh] md:mx-20 space-y-4">
          <h1 className="text-center text-3xl md:text-5xl text-[#003b8a] font-roboto font-thin">
            Our Offerings
          </h1>
          <p className="text-[#004AAD] text-xl mt-4 mx-8">
            Through experience, we have witnessed firsthand the unique
            characteristics public service leaders possess, the unique
            challenges they face, and the unique opportunities they have to make
            lasting differences in the world.
          </p>
          <p className="text-[#004AAD] text-xl mt-4 mx-12 md:mx-24">
            The <b>characteristics</b> of these leaders reflect Jim Collins’
            Level Five Leader: burning with the fire of fierce will, balanced by
            the deep waters of humility.
          </p>
          <p className="text-[#004AAD] text-xl mt-4 mx-12 md:mx-24">
            The <b>challenges</b> these leaders face are significant: burnout in
            service to their cause, challenges prioritizing what matters most
            amid the endlessness of their missions and political pressure, and
            keeping their people engaged.
          </p>
          <p className="text-[#004AAD] text-xl mt-4 mx-12 md:mx-24">
            The <b>opportunities</b> for these stewards of society are
            limitless: impacting generations for good.
          </p>
          <p className="text-[#004AAD] text-xl mt-4 mx-8">
            Model Leader exists to{" "}
            <i>cultivate the characteristics, overcome the challenges,</i> and
            <i> maximize the opportunities</i> for leaders in government,
            nonprofit, education, healthcare and family organizations.
          </p>
        </div>
      </div>
      <section
        className={`flex ${
          isMobile ? "flex-col space-y-4" : "flex-row"
        }   w-4/5 p-4 md:p-10 items-center justify-center self-center`}
      >
        {STR_CONSTANTS.OFFERINGS.map((offering) => (
          <div
            key={offering.id}
            className={isMobile ? "min-w-full" : "w-3/4 p-4"}
          >
            <ServiceComponent
              title={offering.title}
              description={offering.description}
              icon={offering.icon}
              link={offering.link}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default OfferingsPage;
