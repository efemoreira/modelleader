import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import STR_CONSTANTS from "../assets/strings";

import offerings from "../assets/offerings.png";
import video from "../assets/1.jpeg";

import BannerSection from "../components/BannerSection";
import OfferingsSection from "../components/OfferingsSection";
import ContactSection from "../components/ContactSection";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";

import TestimonialsSlider from "../components/TestimonialsCarousel";
import PhilosophiesSection from "../components/PhilosophiesSection";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="bg-white flex flex-col items-center justify-center">
        <main className="w-full h-full flex flex-col items-center justify-center">
          <Parallax id="home" className="w-full" speed={-50}>
            <section className="w-full min-h-screen">
              <BannerSection
                type="image"
                src={video}
                headerTop={STR_CONSTANTS.BANNER_TEXT_1}
                header={STR_CONSTANTS.BANNER_TEXT_2}
                button="Learn More"
                size={"100vh"}
              />
            </section>
          </Parallax>
          <div id="about" className="w-full z-10">
            <section className="w-full min-h-[70vh] bg-white">
              <PhilosophiesSection />
              <TestimonialsSlider />
            </section>
          </div>
          <Parallax className="w-full min-h-[80vh]" speed={-2} id="offering">
            <section
              className="w-full min-h-[80vh] bg-cover bg-top"
              style={{
                backgroundImage: `url(${offerings})`,
              }}
            >
              <OfferingsSection />
            </section>
            <section className="w-full">
              <ContactSection />
            </section>
          </Parallax>
        </main>
      </div>
    </ParallaxProvider>
  );
};

export default HomePage;
