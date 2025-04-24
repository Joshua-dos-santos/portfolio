import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="quantico-regular pt-28 min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white flex flex-col items-center px-4 sm:px-6 lg:px-20 pb-16">
      
      {/* Contact Form */}
      <div className="w-full max-w-md sm:max-w-lg bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Contact me</h2>
        <form className="space-y-6">
          
          {/* Naam */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Bericht */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 flex space-x-6">
        <a
          href="https://www.instagram.com/j.dos_santos/"
          className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-dos-santos-oliveira-mota-16418420b/"
          className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
