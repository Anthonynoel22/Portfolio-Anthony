import React from "react";
import Maestro from "../../assets/logo_maestro.png";
import API_Dog from "../../assets/cute-dog-logo_1051-3349.avif";
import "./Project.scss";

const projects = [
    {
        title: "Maestro",
        description: "Site d'un compositeur de musique",
        link: "https://maestro-front-anthony.netlify.app",
        githubLinks: [
            { name: "GitHub Back", url: "https://github.com/Anthonynoel22/maestro-back" },
            { name: "GitHub Front", url: "https://github.com/Anthonynoel22/maestro-front" },
        ],
        image: Maestro,
    },

    {
        title: "API_Dog",
        description: "Api react sur les chiens",
        link: "https://api-react-dog.netlify.app/",
        githubLinks: [
            { name: "GitHub", url: "https://github.com/Anthonynoel22/API-React"},
        ],
        image: API_Dog,
    },
];

function Project() {
    return (
        <div className="project-container">
            <div className="title-container">
                <h1 className="title">
                    <span role="img" aria-label="computer" className="project-icon">💻</span>
                    Projets
                </h1>
            </div>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <img
                            src={project.image}
                            alt={`aperçu de ${project.title}`}
                        />
                        <p>{project.description}</p>

                        <div className="buttons-container">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Voir en ligne
                            </a>
                            {project.githubLinks.map((repo, index) => (
                                <a
                                    key={index}
                                    href={repo.url}
                                    target="_blank" // ouvre dans un nouvel onglet
                                    rel="noopener noreferrer" // sécurité et confidentialité 
                                    className="project-link"
                                >
                                    {repo.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;

