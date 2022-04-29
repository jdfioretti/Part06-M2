import React from "react";
import estilos from "./card.module.css";

export default function Card({ onClose, name, min, max, img }) {
  // acá va tu código

  return (
    <div className={estilos.contenedor}>
      <button onClick={onClose} className={estilos.btn}>
        X
      </button>
      <h4>{name}</h4>
      <div className={estilos.infoCont}>
        <div>
          <h6>Min</h6>
          <p>{min}° </p>
        </div>
        <div>
          <h6>Max</h6>
          <p>{max}° </p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="img not found"
        />
      </div>
    </div>
  );
}
