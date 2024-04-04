import { ReactComponent as EmailIcon } from "../assets/emailIcon.svg";
import { ReactComponent as PhoneIcon } from "../assets/phoneIcon.svg";
import { ReactComponent as PinIcon } from "../assets/pinIcon.svg";

import logo from "../assets/8.png";
import { Link } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "../.firebase/firebase";

const ContactSection: React.FC = () => {
  return (
    <div className="bg-[#004AAD] w-full min-h-[60vh] justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col items-center py-10">
          <div className="text-[#fff] m-8 space-y-4">
            <p className="text-5xl">
              We would love
              <br />
              to hear from you!
            </p>
            <p className=" text-xl">
              Contact us to learn more about our services.
            </p>
          </div>
        </div>
        <div className="p-12 flex items-center justify-center">
          <Link
            to={"/contact"}
            className="bg-[#ffb552] text-lg font-bold py-6 px-10 rounded-full mt-4 hover:bg-[#AD6300] text-[#004AAD] hover:text-[#fff] shadow-md"
            onClick={() => logEvent(analytics, "SendUsAMessageClicked")}
          >
            Send us a Message
          </Link>
        </div>
      </div>
      <div className="p-10 bg-[#ececec] rounded-md md:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex justify-center">
            <img src={logo} alt="Model Leader Logo" />
          </div>
          <div className="flex justify-center items-center">
            <div className="text-xl text-[#004AAD] space-y-5">
              <h1 className="text-center text-3xl md:text-4xl text-[#003b8a] font-roboto font-thin">
                Contact Us
              </h1>
              <div className="flex flex-col md:flex-row items-center mt-2">
                <EmailIcon className="h-6 fill-[#004AAD]" />
                <p className="mx-4">contact@modelleader.com</p>
              </div>
              <div className="flex flex-col md:flex-row items-center mt-2">
                <PhoneIcon className="h-6 fill-[#004AAD]" />
                <p className="mx-4">+1 (202) 852-7367</p>
              </div>
              <div className="flex flex-col md:flex-row items-center mt-2">
                <PinIcon className="h-6 fill-[#004AAD]" />
                <p className="mx-4">Based in Washington, D.C.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
