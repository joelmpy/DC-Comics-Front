import React from "react";
import './power.css'
import power from './assets/hero.jpg'

function Power(props) {
  return (
    <div id="power">
    <section className="main-power">
      <h2>Power</h2>
      <p>{props.data.power ? props.data.power : "L'equipe fait la force de la Justice League"}</p>
      <div className="power-img">
      <img src={props.data.poster_power ? props.data.poster_power : power} />
      </div>
    </section>
    </div>
  );
}

export default Power;
