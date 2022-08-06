import "./bodyPage.css";
import img from "./assets/justice.webp"

import React from "react";

function BodyPage(props) {
    console.log(props.data.poster_path)
    return (
        <section id="about">
            <div className="about-characters">
                <div className="section-right">
                    <div className="bloc" style={{color : props.data.color  }}>
                        <h2>{props.data.name ? props.data.name : "Justice League"}</h2>
                        <img src={props.data.poster_path ? props.data.poster_path : img} />
                    </div>
                </div>

                <div className="section-left">
                    <div className="bloc">
                        <h2>Description</h2>
                        <p>{props.data.description ? props.data.description : "La Justice League est une organisation composée des plus grands super-héros du monde. Ensemble, ils fonctionnent comme une équipe dédiée à la lutte contre le crime et l'injustice, et agissent comme la première ligne de défense de la Terre contre les menaces terrestres, extraterrestres et interdimensionnelles. Les membres fondateurs étaient Aquaman , Batman , Cyborg , The Flash , Green Lantern , Superman et Wonder Woman ."}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BodyPage;
