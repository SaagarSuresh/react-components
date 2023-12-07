import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const StaticWeatherDisplay = () => {

    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [data, setData] = useState([]);

    useEffect(()=>{
    
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
    
    

            
    
            await fetch(`${import.meta.env.VITE_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)
             .then(res => res.json())
             .then(result => {
                setData(result)
             });

            // const res =  await axios.get(`${import.meta.env.VITE_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`);
            // setData(res.data)
            // console.log(res.data);
        }
        fetchData();
    }, [lat, long]);

    return (
        <div>
            {(typeof data.main != 'undefined') ? (
                <WeatherCard weatherData={data} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default StaticWeatherDisplay;