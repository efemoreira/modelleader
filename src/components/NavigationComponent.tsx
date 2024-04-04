import { logEvent } from "firebase/analytics";
import { useState } from "react";
import { Link } from "react-router-dom";
import { analytics } from "../.firebase/firebase";

interface NavItem {
  title: string;
  to: string;
  dropdown?: boolean;
  dropdownItems?: NavItem[];
}

const NavigationComponent: React.FC = () => {
  const navLinks: NavItem[] = [
    { title: "Home", to: "/" },
    {
      title: "About",
      to: "/about",
      dropdown: true,
      dropdownItems: [
        { title: "Model Leader", to: "/about" },
        { title: "Our Team", to: "/ourteam" },
      ],
    },

    {
      title: "Offerings",
      to: "/offerings",
      dropdown: true,
      dropdownItems: [
        { title: "Individual Leaders", to: "/individual-leaders" },
        { title: "Leadership Teams", to: "/leadership-teams" },
        { title: "Organizations", to: "/organizations" },
      ],
    },
    {
      title: "Resources",
      to: "/publications",
    },
    { title: "Testimonials", to: "/testimony" },
    { title: "Contact", to: "/contact" },
  ];

  const [showNav, setShowNav] = useState(false);
  const [dropdownStates, setDropdownStates] = useState<boolean[]>(
    navLinks.map(() => false)
  );

  const isMobile = window.innerWidth < 768;

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleDropdown = (index: number) => {
    const newStates = dropdownStates.map((state, i) =>
      i === index ? !state : false
    );
    setDropdownStates(newStates);
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
        {navLinks.map((link, index) => (
          <div
            key={link.to}
            className="ml-4 sm:ml-6 text-sm sm:text-base font-medium text-[#004AAD] cursor-pointer transition-colors duration-200 hover:text-[#9a9fd7] py-1 border-b-2 border-transparent active:text-[#9a9fd7] active:border-[#9a9fd7]"
            onMouseEnter={
              link.dropdown ? () => toggleDropdown(index) : undefined
            }
            onMouseLeave={
              link.dropdown ? () => toggleDropdown(index) : undefined
            }
          >
            <Link
              to={link.to}
              onClick={() => {
                logEvent(analytics, `${link.title}NavigationClicked`);
                return isMobile && !link.dropdown ? toggleNav() : null;
              }}
            >
              {link.title}
            </Link>
            {link.dropdown && dropdownStates[index] && (
              <div className="absolute flex flex-col z-10 bg-white p-2 rounded-md shadow-md">
                {link.dropdownItems?.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => {
                      logEvent(analytics, `${link.title}NavigationClicked`);
                      return isMobile ? toggleNav() : null;
                    }}
                    className="text-[#004AAD] py-2 px-6 hover:text-[#9a9fd7] cursor-pointer"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
