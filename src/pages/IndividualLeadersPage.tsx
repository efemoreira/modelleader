import { useLayoutEffect } from "react";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import leadersPicture from "../assets/leaders.jpeg";
import ILP1 from "../assets/ILP1.gif";
import ILP2 from "../assets/ILP2.gif";
import ILP3 from "../assets/ILP3.gif";
import AboutSection from "../components/AboutSection";
import { useLocation } from "react-router-dom";

const IndividualLeadersPage: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96">
        <MLIcon className="absolute bottom-[-150%] right-[-100%] fill-[#1927533b] " />
      </div>
      <img
        src={leadersPicture}
        className="max-h-[75vh] w-full object-cover mt-20 relative object-top"
        alt="Individual Leaders Model Leader"
      />
      <div className="mt-8 items-center justify-center">
        <h1 className="text-center text-6xl font-roboto font-thin text-[#004AAD]">
          Individual Leaders
        </h1>
      </div>
      <div className="md:space-y-[-20vh]">
        <AboutSection
          title={"One-on-one coaching"}
          description="Our International Coach Federation (ICF) certified executive coaches partner with leaders to unlock their full leadership potential."
          imageSrc={ILP1}
          imagePosition="right"
          showed
        />
        <div className="w-40 h-40">
          <MLIcon className="absolute right-[-100%] fill-[#1927533b] " />
        </div>
        <AboutSection
          title={"360° Assessment"}
          description="We offer interview-based and assessment-based 360s for leaders."
          imageSrc={ILP2}
          imagePosition="left"
        />
        <AboutSection
          title={"Consulting"}
          description="Working one-on-one we partner with leaders through a specific process to define their own model for more authentic, intentional leadership."
          imageSrc={ILP3}
          imagePosition="right"
        />
      </div>
    </div>
  );
};

export default IndividualLeadersPage;
