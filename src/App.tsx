import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterSection from "./components/FooterSection";
import HeaderComponent from "./components/HeaderComponent";
import OurTeamPage from "./pages/OurTeamPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import OfferingPage from "./pages/OfferingPage";
import PublicationsPage from "./pages/PublicationsPage";
import AndrewPage from "./pages/AndrewPage";
import ArielPage from "./pages/ArielPage";
import IndividualLeadersPage from "./pages/IndividualLeadersPage";
import LeadershipTeamsPage from "./pages/LeadershipTeamsPage";
import OrganizationsPage from "./pages/OrganizationsPage";
import TestimonialPage from "./pages/TestimonialsPage";

const App: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ourteam" element={<OurTeamPage />} />
          <Route path="/testimony" element={<TestimonialPage />} />
          <Route path="/andrew" element={<AndrewPage />} />
          <Route path="/ariel" element={<ArielPage />} />
          <Route path="/offerings" element={<OfferingPage />} />
          <Route
            path="/individual-leaders"
            element={<IndividualLeadersPage />}
          />
          <Route path="/leadership-teams" element={<LeadershipTeamsPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
};

export default App;
