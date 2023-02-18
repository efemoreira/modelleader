import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import STR_CONSTANTS from "./assets/strings";

import forest from "./assets/forest.jpeg";
import andrew2 from "./assets/andrew.jpeg";
import tree from "./assets/tree.jpeg";

import HomeBannerSection from "./components/HomeBannerSection";
import OfferingsSection from "./components/OfferingsSection";
import ContactSection from "./components/ContactSection";
import HeaderComponent from "./components/HeaderComponent";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PhilosophiesSection from "./components/PhilosophiesSection";

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="bg-white flex flex-col items-center justify-center">
        <HeaderComponent />
        <main className="w-full h-full flex flex-col items-center justify-center">
          <Parallax id="home" className="w-full" speed={-50}>
            <section className="w-full min-h-screen">
              <HomeBannerSection />
            </section>
          </Parallax>
          <div id="about" className="w-full z-10">
            <section className="w-full min-h-screen bg-white">
              <AboutSection
                title={STR_CONSTANTS.ABOUT_MODEL_TITLE}
                description={STR_CONSTANTS.ABOUT_MODEL_DESCRIPTION}
                imageSrc={tree}
                imagePosition="left"
              />
            </section>
            <TestimonialsSection />
            <section className="w-full min-h-screen bg-white">
              <AboutSection
                title={STR_CONSTANTS.ABOUT_ME_TITLE}
                description={STR_CONSTANTS.ABOUT_ME_DESCRIPTION}
                imageSrc={andrew2}
                imagePosition="right"
              />
            </section>
            <PhilosophiesSection />
          </div>
          <Parallax className="w-full min-h-screen" speed={-2} id="offering">
            <section
              className="w-full min-h-screen bg-cover"
              style={{
                backgroundImage: `url(${forest})`,
              }}
            >
              <OfferingsSection />
            </section>
          </Parallax>
          <div className="z-10 w-full min-h-screen" id="contact">
            <section className="w-full min-h-screen">
              <ContactSection />
            </section>
          </div>
        </main>
        <FooterSection />
      </div>
    </ParallaxProvider>
  );
};

export default App;
