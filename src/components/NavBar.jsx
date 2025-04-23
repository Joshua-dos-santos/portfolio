import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-50 text-white p-4 fixed top-0 w-full backdrop-blur-md z-50">
      <ul className="flex justify-center space-x-4">
        <li className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded transition-colors duration-300">
          <FontAwesomeIcon icon={faHome} className="text-xl" />
          <Link
            to="/"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded transition-colors duration-300">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-xl" />
          <Link
            to="/skills-projects"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Skills & Projects
          </Link>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded transition-colors duration-300">
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          <Link
            to="/contact"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
