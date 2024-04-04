import { useState } from "react";
import BannerSection from "../components/BannerSection";
import banner from "../assets/contactBanner.jpeg";
import { ReactComponent as EmailIcon } from "../assets/emailIcon.svg";
import { ReactComponent as PhoneIcon } from "../assets/phoneIcon.svg";
import { ReactComponent as PinIcon } from "../assets/pinIcon.svg";
import { ReactComponent as MLIcon } from "../assets/model_leader_icon.svg";
import { setDoc, doc } from "firebase/firestore";
import Recaptcha from "react-google-recaptcha";
import { db } from "../.firebase/firebase";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  async function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (captcha) {
      try {
        await setDoc(doc(db, "email", new Date().toISOString()), {
          name: name,
          email: email,
          message: message,
        });
        setName("");
        setEmail("");
        setMessage("");
        alert(`Thank you for contacting us`);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Check the captcha");
    }
  }

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="bg-gray-100 min-h-screen w-screen relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <MLIcon className="absolute bottom-[-230%] right-[-100%] fill-[#1927533b] " />
      </div>
      <BannerSection type={"image"} src={banner} size={"40vh"} />
      <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl text-[#003b8a] mt-7 mb-8 font-roboto font-thin">
          We look forward to hearing from you!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-[#004AAD] mb-4">
              Contact us to explore possibilities and learn more about our
              services.
            </p>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-[#003b8a] mb-2"
                >
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-[#003b8a] mb-2"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-[#003b8a] mb-2"
                >
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <Recaptcha
                sitekey={process.env.REACT_APP_SITE_KEY ?? ""}
                onChange={(c) => setCaptcha(c ?? "")}
              />
              <div>
                <button
                  onClick={(e) => handleOnClick(e)}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#004AAD] hover:bg-[#003b8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005cd8]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <ul className="space-y-2">
              <li className=" flex flex-row">
                <EmailIcon className="h-6 fill-[#004AAD]" />
                <a
                  href="mailto:contact@modelleader.com"
                  className="text-lg text-[#004AAD] hover:text-[#004AAD]"
                >
                  contact@modelleader.com
                </a>
              </li>
              <li className=" flex flex-row">
                <PhoneIcon className="h-6 fill-[#004AAD]" />
                <a
                  href="tel:+1234567890"
                  className="text-lg text-[#004AAD] hover:text-[#004AAD]"
                >
                  +1 (202) 852-7367
                </a>
              </li>
              <li className=" flex flex-row">
                <PinIcon className="h-6 fill-[#004AAD]" />
                <p className="text-lg text-[#004AAD]">
                  Based in Washington, D.C.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
