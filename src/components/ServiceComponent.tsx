import LeaderIcon from "../assets/leadersIcon.jsx";
import TeamIcon from "../assets/teamsIcon.jsx";
import OrganizationIcon from "../assets/organizationsIcon.jsx";
import { Link } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "../.firebase/firebase";

type ServiceProps = {
  title: string;
  description?: string;
  icon: string;
  link: string;
};

const ServiceComponent: React.FC<ServiceProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  const descriptionElements = description?.split("<br/>").map((text, index) => (
    <div key={index}>
      <div>
        {text}
        <br />
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col rounded bg-[#fffc] text-black p-4 shadow-lg transform transition duration-200 hover:-translate-y-2 mx-2 md:w-7/8 items-center justify-center">
      {icon === "leaders" ? <LeaderIcon /> : null}
      {icon === "teams" ? <TeamIcon /> : null}
      {icon === "organizations" ? <OrganizationIcon /> : null}
      <h3 className="font-roboto font-thin mb-2 text-center text-4xl mt-4 text-[#003b8a]">
        {title}
      </h3>
      {description && (
        <div className="h-4/5 overflow-hidden text-[#003b8a] text-center">
          {descriptionElements}
        </div>
      )}
      <Link
        to={link}
        className="bg-[#003b8a] text-white font-bold py-2 px-4 rounded mt-4 hover:bg-[#19275355]"
        onClick={() => logEvent(analytics, `${title}OfferingsClicked`)}
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceComponent;
