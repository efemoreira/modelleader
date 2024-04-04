import NavigationComponent from "./NavigationComponent";
import { useNavigate } from "react-router-dom";
import logo from "../assets/5.png";
import { logEvent } from "firebase/analytics";
import { analytics } from "../.firebase/firebase";

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="w-screen h-20 sm:h-20 flex items-center justify-center bg-white fixed top-0 left-0 z-[999]">
      <div className="w-4/5 sm:w-3/4 h-10 sm:h-16 flex items-center justify-between bg-white z-[999]">
        <div
          className="flex flex-row items-center cursor-pointer space-x-2"
          onClick={() => {
            logEvent(analytics, "HeaderClicked");
            if (window.location.pathname === "/") {
              window.scrollTo(0, 0);
            } else {
              navigate("/");
            }
          }}
        >
          <img src={logo} alt="logo" className="h-32" />
        </div>
        <NavigationComponent />
      </div>
    </header>
  );
};

export default HeaderComponent;
