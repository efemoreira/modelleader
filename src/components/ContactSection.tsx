import React from "react";
import FormComponent from "./FormComponent";

const ContactSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-teal-500 w-full min-h-screen justify-center items-center">
      <div className="flex flex-col items-center py-10">
        <div>
          <div className="flex bg-black h-1 w-6 mb-2" />
          <h1 className="text-left text-5xl font-bold text-black mb-4">
            Contact
            <br />
            Us
          </h1>
          <div className="text-black">
            <p>We'd love to hear from you!</p>
            <p>
              <strong>Email:</strong> andrew@modelleader.com
            </p>
            <p>
              <strong>Tel:</strong> 202-642-9162
            </p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <FormComponent />
      </div>
    </div>
  );
};

export default ContactSection;
