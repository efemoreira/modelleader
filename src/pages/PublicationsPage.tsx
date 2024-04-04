import { useState } from "react";
import BannerSection from "../components/BannerSection";
import banner from "../assets/publicationsBanner.jpeg";
import { PublicationData, publicationsD } from "../data/publications";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";

interface PublicationProps {
  publication: PublicationData;
  onClick?: () => void;
}

const getReadMoreText = (type: string) => {
  if (type === "Podcast") {
    return "Listen now";
  } else if (type === "Video") {
    return "Watch now";
  } else {
    return "Read more";
  }
};

const Publication: React.FC<PublicationProps> = ({ publication, onClick }) => (
  <article
    key={publication.id}
    className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 max-w-2xl"
    onClick={onClick}
  >
    <div className="flex flex-col h-full">
      <div>
        <img
          className="mb-2 rounded-lg w-full bg-white object-cover"
          src={publication.imageUrl}
          alt={publication.title}
        />
        <div className="flex justify-between items-center mb-2 text-gray-500">
          <span className="bg-[#005cd8] text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            {publication.type}
          </span>
          <span className="text-sm">{publication.date}</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href={publication.url}>{publication.title}</a>
        </h2>
        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
          {publication.description}
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-4">
          <span className="font-medium dark:text-white">
            by {publication.author}
          </span>
        </div>
        <a
          href={publication.url}
          className="inline-flex items-center self-end font-medium text-primary-600 dark:text-white hover:underline"
        >
          {getReadMoreText(publication.type ?? "")}
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </article>
);

const PublicationsPage: React.FC = () => {
  const publications: PublicationData[] = publicationsD;
  const [selectedItem, setSelectedItem] = useState<PublicationData | null>(
    null
  );

  const openModal = (item: PublicationData) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="bg-gray-100 w-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96">
        <MLIcon className="absolute bottom-[-140%] right-[-100%] fill-[#1927533b] " />
      </div>
      <BannerSection size="50vh" type={"image"} src={banner} />
      <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden">
        <h1 className="text-6xl m-8 font-roboto font-thin text-[#003b8a]">
          Resources
        </h1>
        <p className="text-lg m-8 text-[#004AAD]">
          Our expertise goes beyond developing leaders. We also write and speak
          on public service leadership, generating greater awareness of the
          vital role these leaders play in society.{" "}
        </p>
        <div className="grid gap-2 lg:grid-cols-2">
          <div className="grid content-center gap-2">
            {publications
              .filter((_, index) => index % 2 === 0)
              .map((publication) => (
                <Publication
                  key={publication.id}
                  publication={publication}
                  onClick={() => openModal(publication)}
                />
              ))}
          </div>
          <div className="grid content-center gap-2">
            {publications
              .filter((_, index) => index % 2 !== 0)
              .map((publication) => (
                <Publication
                  key={publication.id}
                  publication={publication}
                  onClick={() => openModal(publication)}
                />
              ))}
          </div>
        </div>
      </div>
      {selectedItem && (
        <div
          className="fixed z-50 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75"
          onClick={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen p-4">
            <Publication
              key={selectedItem.id}
              publication={selectedItem}
              onClick={() => handleModalClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationsPage;
