import React from "react";
import STR_CONSTANTS from "../assets/strings";
import NavigationComponent from "./NavigationComponent";

const HeaderComponent: React.FC = () => {
  return (
    <header className="w-full h-16 sm:h-20 flex items-center justify-center bg-white fixed top-0 left-0 z-[999]">
      <div className="w-4/5 sm:w-3/4 h-10 sm:h-16 flex items-center justify-between bg-white z-[999]">
        <div className="flex flex-col items-center">
          <h1 className="tracking-widest text-2xl font-extrabold">
            {STR_CONSTANTS.TITLE_HEADER}
          </h1>
          <h4 className="tracking-widest font-light text-sm">
            {STR_CONSTANTS.SUBT_HEADER}
          </h4>
        </div>
        <NavigationComponent />
      </div>
    </header>
  );
};

export default HeaderComponent;
