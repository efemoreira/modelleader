import React from "react";

type ServiceProps = {
  title: string;
  description: string;
  icon: string;
};

const ServiceComponent: React.FC<ServiceProps> = ({
  title,
  description,
  icon,
}) => {
  const descriptionElements = description.split("<br/>").map((text, index) => (
    <React.Fragment key={index}>
      <div>
        {text}
        <br />
      </div>
    </React.Fragment>
  ));

  return (
    <div className="rounded bg-white text-black p-4 shadow-lg transform transition duration-200 hover:-translate-y-2 mx-2 md:w-7/8">
      <i className={`${icon} text-3xl mb-2`}></i>
      <h3 className="font-bold mb-2 text-center">{title}</h3>
      <div className="h-4/5 overflow-hidden">{descriptionElements}</div>
    </div>
  );
};

export default ServiceComponent;
