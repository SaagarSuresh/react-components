import moment from "moment/moment";
import React from "react";
import { Card } from "semantic-ui-react";
import { Button } from 'semantic-ui-react';

const refresh = () => {
    window.location.reload();
  }

const WeatherCard = ({weatherData}) => {

    return (
        <Card>
            <Card.Content>
                <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
                <p>Temperature: {weatherData.main.temp} &deg;C</p>
                <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
                <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity} %</p>
                <p>Day: {moment().format('dddd')}</p>
                <p>Date: {moment().format('LL')}</p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
              
                
            </Card.Content>
        </Card>
    )
}

export default WeatherCard;