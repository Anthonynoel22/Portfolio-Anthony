import React from "react";
import { Linkedin, Github } from "react-bootstrap-icons";
import "./Contact.scss";

function Contact() {
    return (
        <div className="contact-container"> 
            <h1 className="contact-title">
                <span role="img" aria-label="briefcase" className="icon malette-icon">💼</span> 
                Contact
            </h1>

            <div className="links-container">
                <a
                    href="https://www.linkedin.com/in/anthony-noel-kiruparajah"
                    target="_blank" // Ouvre le lien dans un nouvel onglet
                    rel="noopener noreferrer"  // Bonnes pratiques de sécurité avec target="_blank
                    className="contact-link"
                    aria-label="Ouvrir LinkedIn dans un nouvel onglet"// Améliore l'accessibilité
                >
                    <Linkedin className="icon linkedin-icon" />
                    Linkedin
                </a>

                <a
                    href="https://github.com/Anthonynoel22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="Ouvrir GitHub dans un nouvel onglet"
                >
                    <Github className="icon github-icon" />
                    Github
                </a>
            </div>
        </div>
    );
}

export default Contact;

