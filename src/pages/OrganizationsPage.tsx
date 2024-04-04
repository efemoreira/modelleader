import { useLayoutEffect } from "react";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import leadersPicture from "../assets/organizations.jpeg";
import OP1 from "../assets/OP1.gif";
import OP2 from "../assets/OP2.gif";
import OP3 from "../assets/OP3.gif";
import AboutSection from "../components/AboutSection";
import { useLocation } from "react-router-dom";

const OrganizationsPage: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96">
        <MLIcon className="absolute bottom-[-140%] right-[-100%] fill-[#1927533b] " />
      </div>
      <img
        src={leadersPicture}
        className="max-h-[75vh] w-full object-cover mt-20 relative"
        alt="Organization Model Leader"
      />
      <div className="mt-8 items-center justify-center">
        <h1 className="text-center text-5xl md:text-6xl font-roboto font-thin text-[#004AAD]">
          Organizations
        </h1>
      </div>
      <div className="md:space-y-[-20vh]">
        <AboutSection
          title={"Keynotes"}
          description="We motivate and inspire large audiences on the topic of public service leadership and what sets it apart, helping cause-based workforces align to the higher purpose they committed to."
          imageSrc={OP1}
          imagePosition="right"
          showed
        />
        <div className="w-40 h-40">
          <MLIcon className="absolute right-[-100%] fill-[#1927533b] " />
        </div>
        <AboutSection
          title={"Training"}
          description="We train organizations on a range of topics–from emotional intelligence to building coalitions to strengthening accountability."
          imageSrc={OP2}
          imagePosition="left"
        />
        <AboutSection
          title={"Retreats"}
          description="We bring a sense of community and cohesion to organizational retreats, where teammates leave with a greater understanding of one another as individuals and greater commitment to the organizational missions they support."
          imageSrc={OP3}
          imagePosition="right"
        />
      </div>
    </div>
  );
};

export default OrganizationsPage;
