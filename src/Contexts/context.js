import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

const Context = ({ children }) => {
    const [location, setLocation] = useState("");
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const APIKEY = 'ecbb714ccbmsh67b9e46650f0a5fp1c7226jsna57148f6d269';

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': APIKEY,
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
            }
        };

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${location}&units=imperial`, options)
            .then(response => response.json())
            .then(response => setWeatherData(response))
            .catch(err => console.error(err));
    }, [location])

    return (<WeatherContext.Provider value={{
        location,
        setLocation,
        setWeatherData,
        weatherData
    }}>
        {children}
    </WeatherContext.Provider>)
}

export default Context


export const WeatherState = () => {
    return useContext(WeatherContext);
};
