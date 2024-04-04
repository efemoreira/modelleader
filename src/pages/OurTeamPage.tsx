import { Link } from "react-router-dom";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import ariel from "../assets/ariel.jpg";
import andrew from "../assets/pointingAndrew.jpg";

function OurTeamPage() {
  return (
    <div className="bg-gray-100 w-screen min-h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <MLIcon className="absolute top-[-100%] right-[-100%] fill-[#1927533b] " />
      </div>
      <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 lg:px-10 lg:py-24">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-3xl leading-none tracking-tight text-[#003b8a] sm:text-4xl md:mx-auto font-roboto font-thin">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative ">Meet</span>
            </span>{" "}
            our team
          </h2>
          <p className="text-base text-[#004AAD] md:text-lg">
            We’re a high-trust, high-purpose team here to help you make the
            world a better place!
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          <Link to="/andrew">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80 object-top"
                src={andrew}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Andrew Marshall
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  Co-Founder, Co-Owner, Executive Coach
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400"></p>
              </div>
            </div>
          </Link>
          <Link to="/ariel">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80 object-top"
                src={ariel}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ariel Galli Marshall
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  Co-Founder, Co-Owner, Senior Designer and Facilitator
                </p>
              </div>
            </div>
          </Link>
          {/* <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Felipe Moreira
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  Chief Technology Officer
                </p> 
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default OurTeamPage;
