import { ReactComponent as EmailIcon } from "../assets/emailIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagramIcon.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedinIcon.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebookIcon.svg";
import { logEvent } from "firebase/analytics";
import { analytics } from "../.firebase/firebase";

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#004AAD] text-gray-100 py-6 px-20 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center">
        <p className="mr-4">© 2023 Model Leader LLC</p>
      </div>
      <div className="flex space-x-6">
        <div className="flex items-center">
          <EmailIcon className="h-8 fill-[#ececec]" />
          <p className="">contact@modelleader.com</p>
        </div>
        <InstagramIcon
          className="h-10 fill-[#ececec] cursor-pointer"
          onClick={() => {
            window.location.href = "https://www.instagram.com/modelleadership/";
            logEvent(analytics, "InstagramFooterClicked");
          }}
        />
        <LinkedInIcon
          className="h-10 fill-[#ececec] cursor-pointer"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/company/modelleader/";
            logEvent(analytics, "LinkedInFooterClicked");
          }}
        />
        <FacebookIcon
          className="h-10 fill-[#ececec] cursor-pointer"
          onClick={() => {
            window.location.href =
              "https://www.facebook.com/profile.php?id=100094489206835";
            logEvent(analytics, "FacebookFooterClicked");
          }}
        />
      </div>
    </footer>
  );
};

export default FooterSection;
