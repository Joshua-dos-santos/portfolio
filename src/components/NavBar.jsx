import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full">
        <ul className="flex justify-around">
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHome} />
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faProjectDiagram} />
            <Link to="/skills-projects" className="hover:text-gray-300">Skills & Projects</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
export default NavBar;
  
