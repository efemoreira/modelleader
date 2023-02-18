import React, { useState } from "react";
import { Link } from "react-scroll";

const NavigationComponent: React.FC = () => {
  const navLinks = [
    { title: "Home", to: "home" },
    { title: "About", to: "about" },
    { title: "Experience", to: "experience" },
    { title: "Philosophy", to: "philosophy" },
    { title: "Offering", to: "offering" },
    { title: "Contact", to: "contact" },
  ];

  const [showNav, setShowNav] = useState(false);

  const isMobile = window.innerWidth < 768;

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="flex flex-row justify-between items-center px-6 py-3">
      <nav
        className={`items-center ${
          showNav ? "flex flex-col" : "hidden"
        } sm:flex`}
        style={
          isMobile
            ? {
                transition: "all 0.3s ease-in-out",
                position: "fixed",
                top: "4rem",
                left: 0,
                right: 0,
                zIndex: 999,
                background: "#fff",
                padding: "1rem",
              }
            : {}
        }
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            className="ml-4 sm:ml-6 text-sm sm:text-base font-medium text-gray-800 cursor-pointer transition-colors duration-200 hover:text-green-600 py-1 border-b-2 border-transparent active:text-green-600 active:border-green-600"
            activeClass="active"
            smooth
            spy
            to={link.to}
            onClick={() => setShowNav(false)}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <button className="sm:hidden" onClick={toggleNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default NavigationComponent;

// const Header = styled.header`
//   width: 100%;
//   height: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 100;
// `;

// const HeaderBody = styled.div`
//   width: 80%;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: white;
//   position: fixed;
//   z-index: 100;
// `;

// const Navigation = styled.nav`
//   display: flex;
//   align-items: center;
// `;

// const NavLink = styled(Link)`
//   margin-left: 20px;
//   text-decoration: none;
//   color: black;
//   font-size: 18px;
//   transition: all 0.2s ease-in-out;
//   cursor: pointer;

//   &:hover {
//     color: #317e81;
//   }
// `;
