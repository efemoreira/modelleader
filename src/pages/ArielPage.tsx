import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import arielPicture from "../assets/ariel-picture.jpeg";

function ArielPage() {
  return (
    <div className="bg-gray-100 w-screen min-h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96">
        <MLIcon className="absolute top-[-150%] left-[-100%] fill-[#1927533b]" />
      </div>
      <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 lg:px-10 lg:py-24 relative">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 space-y-4">
          <img
            className="object-cover mx-auto rounded-md mb-6"
            src={arielPicture}
            alt="Ariel Galli Marshall"
          />
          <h2 className="max-w-lg mb-6 font-roboto font-thin text-3xl leading-none tracking-tight text-[#004AAD] sm:text-4xl md:mx-auto">
            Ariel Galli Marshall
          </h2>
          <h2 className="max-w-lg mb-6 font-roboto font-thin text-2xl leading-none tracking-tight text-[#004AAD] sm:text-3xl md:mx-auto">
            Co-Founder, Co-Owner, Senior Designer and Facilitator
          </h2>
          <p className="text-base text-[#004AAD] md:text-lg">
            Ariel Galli Marshall is the co-founder, co-owner, senior designer
            and senior facilitator at Model Leader. She leads the research and
            design for Model Leader curriculum in addition to facilitating
            retreats and workshops. She also oversees the operations of the
            organization.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            She has worked with leaders in many capacities, from the new to the
            seasoned. This includes experience teaching, facilitating, and
            coaching in the great outdoors and in school classrooms with youth
            of all backgrounds to the less-great indoors with adults of diverse
            worldviews and experience. Her operational experience comes from
            property management, overseeing international product distribution
            for a global nonprofit and managing the household of her family of
            five children.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            A sociologist in education and at heart, Ariel’s expertise lies in
            systems thinking, strategic foresight, conflict management and
            building healthy cultures. Ariel is certified in the Thomas-Killman
            Conflict Mode Instrument and a soon-to-be graduate of Georgetown’s
            Executive Certificate in Facilitation program.
          </p>
          <p className="text-base text-[#004AAD] md:text-lg">
            She reads dozens of books every year, many of which focus on US
            history and world culture. She loves nature, whether getting her
            hands in the garden or looking over a sweeping vista in a national
            park. Ariel is trilingual, speaking Portuguese conversantly and
            Spanish fluently. She loves cultures, languages, food, and people of
            the world. Her deepest joy and fulfillment comes from leading and
            loving her family.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArielPage;
