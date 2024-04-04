import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import andrewPicture from "../assets/andrew-picture.jpeg";
import PCC from "../assets/PCC.png";

function AndrewPage() {
  return (
    <div className="bg-gray-100 w-screen min-h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96">
        <MLIcon className="absolute top-[-150%] left-[-100%] fill-[#1927533b] " />
      </div>
      <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 lg:px-10 lg:py-24 relative">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 space-y-4">
          <img
            className="object-cover mx-auto rounded-md mb-6"
            src={andrewPicture}
            alt="Andrew Marshall"
          />
          <h2 className="max-w-lg mb-6 font-roboto font-thin text-3xl leading-none tracking-tight text-[#004AAD] sm:text-4xl md:mx-auto">
            Andrew Marshall
          </h2>
          <h2 className="max-w-lg mb-6 font-roboto font-thin text-2xl leading-none tracking-tight text-[#004AAD] sm:text-3xl md:mx-auto">
            Co-Founder, Co-Owner, Executive Coach
          </h2>
          <p className="text-base text-[#004AAD] md:text-lg">
            Andrew Marshall is the co-founder and co-owner of Model Leader. He
            has experience developing thousands of leaders and leadership teams
            in the private, nonprofit and public sector, from aspiring
            supervisors to seasoned executives. He works with C-suite leaders
            managing multi-billion dollar budgets and with responsibility for
            hundreds of thousands of people. These include the senior-most
            leaders at the Departments of Transportation, Health and Human
            Services, Commerce, Labor and Veterans Affairs, as well as Clark
            Construction and FiscalNote, among many others.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            An established thought leader in the field of leadership
            development, he has designed leadership models, 360 assessment
            tools, written case studies, delivered leadership conference
            keynotes, and published with Harvard Business Review and MIT’s Sloan
            Management Review.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            An action-oriented, ICF-certified coach (PCC) and executive
            facilitator, he partners with leaders in discovering and stepping
            into the next version of themselves. He challenges and supports them
            in their quest for model leadership as they deploy their unique
            strengths, navigate complex change and foster a healthy culture.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            Andrew comes with his own executive experience. He founded the
            Public Service Leadership Institute within the Partnership for
            Public Service, overseeing dozens of staff and a multi-million
            dollar budget. The Institute’s impact grew significantly under his
            leadership through the design of a leadership model, assessment
            tools and exponential growth in programming. The team went from
            developing 3,000 to over 8,000 leaders annually. This all took place
            through a global pandemic where he led the team through a
            significant change in designing and delivering virtual and hybrid
            programs.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            He is certified in the Strength Deployment Inventory, Public Service
            Leadership 360 Assessment and the EQ-I 360 Assessment. He is a
            graduate of Georgetown’s executive leadership coaching program.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            He is trilingual, a cellist, a writer, a Spiderman enthusiast, an
            outdoorsman and loves toast. His most important titles are husband,
            father, brother, uncle, son and grandson. He is madly in love with
            and inspired by his wife Ariel and in awe of his five remarkable
            children.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            Andrew is passionate about supporting leaders who lift society.
            Strengthening these leaders positively impacts individuals today and
            generations tomorrow.
          </p>
          <img
            className="object-cover h-40 mx-auto rounded-md mb-6"
            src={PCC}
            alt="Andrew Marshall"
          />
        </div>
      </div>
    </div>
  );
}

export default AndrewPage;
