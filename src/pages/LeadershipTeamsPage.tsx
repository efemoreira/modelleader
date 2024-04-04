import { useLayoutEffect } from "react";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import leadersPicture from "../assets/teams.jpg";
import LTP1 from "../assets/LTP1.gif";
import LTP2 from "../assets/LTP2.gif";
import LTP3 from "../assets/LTP3.gif";
import AboutSection from "../components/AboutSection";
import { useLocation } from "react-router-dom";

const LeadershipTeamsPage: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96">
        <MLIcon className="absolute bottom-[-150%] left-[-100%] fill-[#1927533b] " />
      </div>
      <img
        src={leadersPicture}
        className="max-h-[75vh] w-full object-cover mt-20 relative"
        alt="Leadership Team Model Leader"
      />
      <div className="mt-8 items-center justify-center">
        <h1 className="text-center text-6xl font-roboto font-thin text-[#004AAD]">
          Leadership Teams
        </h1>
      </div>
      <div className="flex flex-col space-y-2 md:space-y-[-20vh]">
        <AboutSection
          title={"Consulting"}
          description="We partner with leadership teams to define a shared leadership model, including fundamental competencies and values they can expect from each other and their workforces can expect from them as leaders."
          imageSrc={LTP1}
          imagePosition="right"
          showed
        />
        <div className="w-40 h-40">
          <MLIcon className="absolute left-[-100%] fill-[#1927533b] " />
        </div>
        <AboutSection
          title={"Training"}
          description="We train leadership teams on a range of topics–from emotional intelligence to building coalitions to strengthening accountability."
          imageSrc={LTP2}
          imagePosition="left"
        />
        <AboutSection
          title={"Retreats"}
          description="Our tailored approach to retreats includes understanding the biggest challenges the team is facing through interviews, surveys and focus groups and designing toward clear outcomes that will help the team move intentionally from its current state to its desired state, as a cohesive team of model leaders."
          imageSrc={LTP3}
          imagePosition="right"
        />
      </div>
    </div>
  );
};

export default LeadershipTeamsPage;
