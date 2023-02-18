import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center">
        <p className="mr-4">© 2023 Example Company</p>
      </div>
    </footer>
  );
};

export default FooterSection;
