import { useLayoutEffect } from "react";
import heroImage from "../assets/aboutUS.jpeg";
import modelleadership from "../assets/andrew.jpeg";
import BannerSection from "../components/BannerSection";
import banner from "../assets/aboutBanner.jpeg";
import { ReactComponent as BinocularIcon } from "../assets/binocularsIcon.svg";
import { ReactComponent as MapIcon } from "../assets/mapIcon.svg";
import { ReactComponent as CompassIcon } from "../assets/compassIcon.svg";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import { useLocation } from "react-router-dom";

const AboutPage: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="bg-gray-100 flex flex-col w-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96">
        <MLIcon className="absolute bottom-[-150%] right-[-100%] fill-[#1927533b] " />
      </div>
      <BannerSection type="image" src={banner} size={"50vh"} />
      <div className="w-5/6 relative rounded-lg top-[-15vh] md:top-[-10vh] bg-white shadow-md p-4 mx-auto flex flex-col md:flex-row mb-[-10vh]">
        <div className="w-full">
          <div className="flex flex-row items-center justify-center w-full">
            <div className="flex flex-row m-4 w-full">
              <BinocularIcon className="basis-1/6 fill-[#003b8a] m-2" />
              <div className="flex flex-col">
                <h2 className="text-2xl  text-[#003b8a] font-roboto font-thin">
                  Vision
                </h2>
                <p className="text-lg text-[#004AAD]">
                  Lifting society through model leadership.
                </p>
              </div>
            </div>
            <div className="flex flex-row m-4 w-full">
              <MapIcon className="basis-1/6 fill-[#003b8a] m-2" />
              <div className="flex flex-col">
                <h2 className="text-2xl text-[#003b8a] font-roboto font-thin">
                  Mission
                </h2>
                <p className="text-lg text-[#004AAD]">
                  We develop model leaders who serve us all.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row m-4 justify-center">
            <CompassIcon className="basis-1/8 h-8 fill-[#003b8a] m-2" />
            <div className="flex flex-col basis-7/8">
              <h2 className="text-2xl text-[#003b8a] font-roboto font-thin">
                Values
              </h2>
              <ul className="text-lg text-[#004AAD]">
                <li>
                  <span className="font-bold">Competence</span>—We come with
                  deep expertise in the field of leadership development.
                </li>
                <li>
                  <span className="font-bold">Compassion</span>—We let love lead
                  in our design and delivery of leadership development efforts.{" "}
                </li>
                <li>
                  <span className="font-bold">Courage</span>—We act boldly as
                  coaches and facilitators, inviting public service leaders to
                  do the same.
                </li>
                <li>
                  <span className="font-bold">Curiosity</span>—We continually
                  learn and derive joy from our own development as leaders.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={modelleadership}
              alt="About Hero"
              className="rounded-md shadow-md h-[70vh] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl text-[#003b8a] font-roboto font-thin rounded-lg p-4">
                Our Story
              </h1>
              <p className="text-lg text-[#003b8a]">
                For 13 years Andrew worked at the Partnership for Public
                Service, a nonpartisan nonprofit organization dedicated to
                building a better government and a stronger democracy. There he
                founded the{" "}
                <a
                  className="underline"
                  href="https://ourpublicservice.org/public-service-leadership-institute/"
                >
                  Public Service Leadership Institute
                </a>
                , the preeminent source for public service leadership policies,
                programs, and perspectives.
              </p>
              <p className="text-lg text-[#003b8a]">
                As the Partnership’s Vice President for Public Service
                Leadership he assembled the{" "}
                <a
                  className="underline"
                  href="https://ourpublicservice.org/our-solutions/leadership-and-collaboration/networks/government-leadership-advisory-council/"
                >
                  Government Leadership Advisory Council
                </a>{" "}
                made up of world-class experts on leadership and public service,
                led the design of the{" "}
                <a
                  className="underline"
                  href="https://ourpublicservice.org/public-service-leadership-institute/public-service-leadership-model/"
                >
                  Public Service Leadership Model
                </a>
                , the{" "}
                <a
                  className="underline"
                  href="https://ourpublicservice.org/public-service-leadership-institute/tools/#360-Assessment"
                >
                  Public Service 360 Assessment Tool
                </a>{" "}
                and the{" "}
                <a
                  className="underline"
                  href="https://ourpublicservice.org/public-service-leadership-institute/tools/#Case-Studies"
                >
                  six associated case studies
                </a>
                . During his tenure as vice president he grew programming from
                supporting 2,000 leaders annually to over 8,000 leaders,
                launching numerous new programs and growing the team by over 50
                percent. Through this dramatic growth the team maintained
                exceptionally high evaluation scores, including 94% of
                participants saying the program made them a better leader and an
                average net promoter score of 87% across programs.
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg text-[#003b8a] my-4">
          Andrew has worked with thousands of public service leaders in his
          career, from new supervisors to cabinet secretaries. He led the design
          and delivery of retreats with Cabinet Secretaries and teams from
          across government, including some of the largest government agencies.
          These retreats all yielded positive evaluation results as well as
          follow-on work. More important than those results, however, are the
          results he supported these leaders in achieving for the public good.
          He partnered with them as they navigated the global pandemic,
          implemented generation-changing legislation and as they sought to keep
          our world safer, healthier and more equitable. He spearheaded an
          effort with the Department of Labor where he and his team worked with
          every leader across the Department, leading to their{" "}
          <a className="underline" href="https://bestplacestowork.org/">
            Best Places to Work in the Federal Government
          </a>{" "}
          leadership scores to move dramatically. An accomplished writer, he has
          published in{" "}
          <a
            className="underline"
            href="https://hbr.org/2020/04/a-nonpartisan-model-for-developing-public-service-leadership"
          >
            Harvard Business Review
          </a>{" "}
          and{" "}
          <a
            className="underline"
            href="https://sloanreview.mit.edu/article/leading-in-government-demands-the-stewardship-of-public-trust/"
          >
            MIT’s Sloan Management Review
          </a>{" "}
          on the topic of public service leadership.
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <p className="text-lg text-[#003b8a]">
              Ariel and Andrew strive to live in joyful service. This service
              orientation is core to their love story (they met while serving!)
              and has motivated them to learn languages, to move to new places,
              to raise five children, to attach themselves to causes bigger than
              themselves, to found Model Leader and ultimately to contribute as
              best they can to a more unified society.
            </p>
            <p className="text-lg text-[#003b8a]">
              They believe that there is no better way to move toward this
              aspiration than through the power of public service leadership.
              Yet to harness this possibility, public service leaders need
              support and development.
            </p>
            <p className="text-lg text-[#003b8a]">
              Government, nonprofit, education, healthcare and family leaders
              who work with us will leave surprised by the possible. An abundant
              world awaits!
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={heroImage}
              alt="About Hero"
              className="rounded-md shadow-md h-[55vh] object-cover w-full object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
