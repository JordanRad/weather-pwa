import React, { useState } from 'react';
import { weatherService } from './weatherService';
import './App.css';
const App = () => {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({})
    const search = async (e) => {
        console.log(e.key)
        if (e.key === "Enter") {
            let data = await weatherService(input)
            console.log(data)
            setInput('')
            setWeather(data)
        }
    }
    return (
        <div className="main-container">
            
            <input type='text' className='search' placeholder="Search..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={search} />
            <div className="description"><i>Type city name and press Enter</i></div>
            
            {weather.main && (
                <div className='city'>
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {weather.main.temp.toFixed(0)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default App;