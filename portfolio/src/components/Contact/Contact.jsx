import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github } from "react-bootstrap-icons";
import "./Contact.scss";

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">
                <span role="img" aria-label="malette" className="icon malette-icon">💼</span>
                Contact
            </h1>

            <div className="links-container">
                <Link
                    to="https://www.linkedin.com/in/anthony-noel-kiruparajah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="Ouvrir LinkedIn dans un nouvel onglet"
                >
                    <Linkedin className="icon linkedin-icon" />
                    Linkedin
                </Link>

                <Link
                    to="https://github.com/Anthonynoel22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="Ouvrir GitHub dans un nouvel onglet"
                >
                    <Github className="icon github-icon" />
                    Github
                </Link>
            </div>
        </div>
    );
}

export default Contact;

