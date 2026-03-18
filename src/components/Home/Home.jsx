import React from "react";
import "./Home.scss";

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">
                Hey, je suis Anthony NOEL KIRUPARAJAH{" "}
                <span className="wave-emoji" role="img" aria-label="hello">
                    🖐️
                </span>
            </h1>
            <p className="home-text">
                Développeur Full-Stack, spécialisé en accessibilité numérique
                (A11Y). J’accorde une importance particulière à la création
                d’expériences web inclusives, intuitives et performantes, en
                plaçant toujours l’utilisateur au centre de mes réflexions. Sur
                le plan front-end, je conçois des interfaces claires et
                accessibles, tout en veillant à la cohérence visuelle et à la
                fluidité de l’expérience utilisateur. Côté back-end, je m’assure
                du bon fonctionnement, de la sécurité et de la scalabilité des
                applications que je développe. Passionné par l’innovation et
                animé par la curiosité, je reste en veille constante sur les
                nouvelles technologies et les meilleures pratiques du web. Mon
                objectif : contribuer à un web plus inclusif, durable et humain,
                en alliant performance technique et accessibilité. Ce portfolio
                est là pour présenter mes projets et permettre de me contacter.
            </p>
        </div>
    );
}

export default Home;
