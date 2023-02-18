import React, { useState } from "react";

const FormComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Envie o formulário para o servidor ou faça algo com os dados
    console.log(name, email, message);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md">
      <label className="block font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="block w-full p-2 mb-4 rounded-md border border-gray-300"
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="block font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="block w-full p-2 mb-4 rounded-md border border-gray-300"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="block font-bold mb-2" htmlFor="message">
        Message
      </label>
      <textarea
        className="block w-full p-2 mb-4 rounded-md border border-gray-300"
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        className="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-900"
      >
        Send Message
      </button>
    </form>
  );
};

export default FormComponent;
