import React from "react";
import video from "../assets/file.mp4";
import styled from "styled-components";
import STR_CONSTANTS from "../assets/strings";

const HomeBannerSection: React.FC = () => {
  return (
    <VideoBackgroundSection>
      <Video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </Video>
      <SectionTextOverlay>
        <p>{STR_CONSTANTS.BANNER_TEXT_1}</p>
        <Heading className="text-7xl font-extrabold">
          {STR_CONSTANTS.BANNER_TEXT_2}
        </Heading>
      </SectionTextOverlay>
    </VideoBackgroundSection>
  );
};

export default HomeBannerSection;

const Heading = styled.h2`
  margin-bottom: 20px;
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

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const VideoBackgroundSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;
