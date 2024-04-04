import styled from "styled-components";
import { Link } from "react-router-dom";
import { analytics } from "../.firebase/firebase";
import { logEvent } from "firebase/analytics";

interface BannerProps {
  type: string;
  src: string;
  headerTop?: string;
  header?: string;
  text?: string;
  button?: string;
  size?: string;
}

const BannerSection: React.FC<BannerProps> = ({
  type,
  src,
  headerTop,
  header,
  text,
  button,
  size = "100vh",
}) => {
  return (
    <VideoBackgroundSection style={{ height: size }}>
      {type === "video" ? (
        <Video autoPlay muted loop playsInline style={{ height: size }}>
          <source src={src} type="video/mp4" />
        </Video>
      ) : (
        <Image className="mt-20" style={{ height: size }} src={src} />
      )}

      <SectionTextOverlay style={{ height: size }}>
        <div className="mx-auto max-w-3xl text-center mt-20">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-4 text-[#fff] font-robotoserif ">
            {headerTop ?? null}
          </h1>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12 font-robotoserif text-[#fff]">
            {header ?? null}
          </h1>
          {button ? (
            <div className="mt-8 flex flex-wrap justify-center gap-4 mx-4">
              <Link
                onClick={() => logEvent(analytics, "BannerClicked")}
                className="block w-full rounded border border-[#ececec] bg-transparent px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to={"/about"}
              >
                {button}
              </Link>
            </div>
          ) : null}
        </div>
      </SectionTextOverlay>
    </VideoBackgroundSection>
  );
};

export default BannerSection;

const SectionTextOverlay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  position: absolute;
  top: 0;
  left: 0;
`;

const Video = styled.video`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  object-fit: cover;
`;

const VideoBackgroundSection = styled.section`
  width: 100%;
  top: 0;
  position: relative;
`;
