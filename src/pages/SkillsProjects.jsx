import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const SkillsProjects = () => {
  const programmingLanguages = [
    { name: "C#", icon: faCode },
    { name: "Python", icon: faCode },
    { name: "JavaScript", icon: faCode },
    { name: "TypeScript", icon: faCode },
  ];

  const frameworks = [
    { name: ".NET", icon: faLaptopCode },
    { name: "React", icon: faLaptopCode },
    { name: "Vue", icon: faLaptopCode },
  ];

  const projects = [
    {
      name: "Portfolio",
      description: "Mijn persoonlijke portfolio",
      link: "#",
      icon: faLaptopCode,
    },
    {
      name: "E-commerce",
      description: "Winkelwebsite met React",
      link: "#",
      icon: faLaptopCode,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 pt-16">
      <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <ul className="space-y-4">
            {programmingLanguages.map((language, index) => (
              <li key={index} className="flex items-center space-x-3 bg-gray-800 p-4 rounded shadow-md">
                <FontAwesomeIcon icon={language.icon} className="text-blue-500 text-xl" />
                <span className="text-lg">{language.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Frameworks</h3>
          <ul className="space-y-4">
            {frameworks.map((framework, index) => (
              <li key={index} className="flex items-center space-x-3 bg-gray-800 p-4 rounded shadow-md">
                <FontAwesomeIcon icon={framework.icon} className="text-green-500 text-xl" />
                <span className="text-lg">{framework.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded shadow-md">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={project.icon} className="text-yellow-500 text-xl" />
              <h3 className="text-xl font-semibold">{project.name}</h3>
            </div>
            <p className="text-gray-300">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:text-blue-300">
              Bekijk project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsProjects;
