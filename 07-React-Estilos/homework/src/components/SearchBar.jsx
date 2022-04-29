import React from "react";
import estilos from "./Search.module.css";


export default function SearchBar(props) {
  // acá va tu código

  return (
    <div className={estilos.contenedor}>
      <input type="text" placeholder="City..." />
      <button onClick={props.onSearch} className={estilos.btn}> Search</button>
    </div>
  )
};
