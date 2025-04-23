const SkillsProjects = () => {
    const skills = ["React", "CSS", "JavaScript"];
    const projects = [
      { name: "Portfolio", description: "Mijn persoonlijke portfolio", link: "#" },
      { name: "E-commerce", description: "Winkelwebsite met React", link: "#" },
    ];
  
    return (
      <div>
        <h2>Vaardigheden</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h2>Projecten</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.name}>
              {project.name}: {project.description} (<a href={project.link}>Bekijk</a>)
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SkillsProjects;
  