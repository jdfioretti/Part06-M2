import React, { useState } from "react";

import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About";
import Ciudad from "../components/Ciudad";

import { Route, Switch } from "react-router-dom";

const apiKey = "8dbfcd3979b392ed5ac38a8485f41704";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.find((c) => c.id === parseInt(ciudadId));
    /* let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    } */
    return ciudad;
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/about"  //Metodo Legacy, con component
        component={About}/> */}
        <Route
          path="/ciudad/:id"
          render={({ match }) => <Ciudad city={onFilter(match.params.id)} />}
        ></Route>
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>
      </Switch>
      <div></div>
      <hr />
    </div>
  );
}

export default App;
