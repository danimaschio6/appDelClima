import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import Nav from './components/Nav';
import Cards from "./components/Cards"
import './App.css';
import About from './components/About';
import Ciudad from "./components/Ciudad"



export default function App() {
  const [cities, setCities] = useState([]);


  function onSearch(ciudad) {
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
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
            longitud: recurso.coord.lon
          };
   
          let ciudadEncontrada = cities.find(city => city.id === ciudad.id)
          if(ciudadEncontrada) return alert ("Esta ciudad ya se encuentra en la lista")
          else return setCities(oldCities => [...oldCities, ciudad]);

        } else {
          alert("Ciudad no encontrada");
        }
      });


  }

  function onClose(id){
    setCities(oldCities => oldCities.filter((index) => index.id !== id))
  
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">

      <Nav onSearch={onSearch}/>
      {/* <Cards cities={cities} onClose={onClose}/> */}
      

      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route path="/" element={<Cards cities={cities} onClose={onClose}/>}/>
        <Route path="/ciudad/:ciudadId" element={<Ciudad onFilter={onFilter} />}/>  


      </Routes>

    </div>
  );
}

