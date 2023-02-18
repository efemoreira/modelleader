import styled from "styled-components";
import { Link } from "react-scroll";

const AppContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const HeaderBody = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  z-index: 100;
`;

const Logo = styled.img`
  height: 40px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #317e81;
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }
`;

const ServicesSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  overflow-x: scroll;
`;

const ServiceBox = styled.div`
  min-width: 380px;
  margin-right: 20px;
  background-color: white;
  color: black;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const ServiceIcon = styled.i`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 20px;
`;

const ServiceDescription = styled.p`
  height: 10vh;
  margin-bottom: 20px;
`;

const VideoBackgroundSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const SectionTextOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(49, 126, 129, 0.129);
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

export {
  AppContainer,
  Header,
  HeaderBody,
  Logo,
  Navigation,
  NavLink,
  Main,
  Section,
  ServiceBox,
  ServiceDescription,
  ServiceIcon,
  ServiceTitle,
  ServicesSection,
  VideoBackgroundSection,
  Video,
  SectionTextOverlay,
  Heading,
};
