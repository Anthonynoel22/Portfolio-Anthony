import React from "react";
import { Link } from "react-router-dom";
import { PersonWorkspace } from "react-bootstrap-icons"; // ✅ import icône
import Maestro from "../../assets/logo_maestro.png";
import "./Project.scss";

const projects = [
    {
        title: "Site Maestro",
        description: "Site d'un compositeur de musique",
        link: "https://maestro-front-anthony.netlify.app/",
        githubLinks: [
            { name: "GitHub Back", url: "https://github.com/Anthonynoel22/maestro-back" },
            { name: "GitHub Front", url: "https://github.com/Anthonynoel22/maestro-front" },
        ],
        image: Maestro,
    },
];

function Project() {
    return (
        <div className="project-container">
            <div className="title-container">
            <h1 className="title">
                <PersonWorkspace className="project-icon" /> {/* ✅ icône ajoutée */}
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
                            <Link
                                to={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Voir en ligne
                            </Link>
                            {project.githubLinks.map((repo, index) => (
                                <a
                                    key={index}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
