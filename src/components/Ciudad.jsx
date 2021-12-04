import React from "react";
import { useParams } from "react-router-dom";

export default function Ciudad({onFilter}) {

    //Esto se llama ciudadId porque es el nombre q estableci en la ROUTE
    const {ciudadId} = useParams()


    const city = onFilter(ciudadId)

    return (
        city ? (<div className="ciudad">
                <div className="container">
                    <h2 className="card-title">{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                </div>
                </div>) : <h1>No hay ciudad para mostrar</h1> )
}