import React from "react";
import {Link} from "react-router-dom";
import "./Contact.scss";

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="links-container">
            <Link
                to="https://www.linkedin.com/in/anthony-noel-kiruparajah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir Linkedin dans un nouvel onglet"
                aria-describedby="linkedin-desc"
            >Linkedin
            </Link>

            <Link
                to="https://github.com/Anthonynoel22/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir Github dans un nouvel onglet"
                aria-describedby="github-desc"
            >Github
            </Link>
            </div>
        </div>
    );
};

export default Contact;