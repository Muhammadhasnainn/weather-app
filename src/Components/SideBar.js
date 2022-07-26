import React, { useState } from 'react'
import "../Sidebar.css";
import { WeatherState } from '../Contexts/context';

const SideBar = () => {
    const [search, setSearch] = useState("");
    const { setLocation, weatherData } = WeatherState();

    console.log(weatherData);
    return (
        <>
            <aside className='Side-Bar'>
                <div className='Side-Bar-Img'></div>
                <div className='Side-bar-content'>
                    <div className='w-100'>
                        <h1 className='text-center'>Hi, Welcome</h1>
                        <div className='d-flex align-items-center w-100 search'>
                            <input type={"text"} placeholder="Enter City Name"
                                onChange={(e) => setSearch(e.target.value)} />
                            <button onClick={() => setLocation(search)}>
                                <img src='https://cdn-icons.flaticon.com/png/512/3031/premium/3031293.png?token=exp=1657355758~hmac=0d2dbf167e647b7815995366e7529fc9' />
                            </button>
                        </div>
                    </div>
                    {weatherData.weather ? <div className='d-flex flex-column align-items-center'>
                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                            className='icon' />
                        <h1 className='weather'>{weatherData.weather[0].main}</h1>
                    </div> : null}

                    {weatherData.main ?
                        <div>
                            <h2 className='text-center'>London</h2>
                            <div className='d-flex justify-content-between mt-1 tile'>
                                <p>Temperature</p>
                                <p>{weatherData.main ?
                                    Math.round((weatherData.main.temp - 32) * 5 / 9)
                                    + "°C" : null}</p>
                            </div>
                            <div className='d-flex justify-content-between mt-1 tile'>
                                <p>Humidity</p>
                                <p>{weatherData.main.humidity} %</p>
                            </div>
                            <div className='d-flex justify-content-between mt-1 tile'>
                                <p>Pressure</p>
                                <p>{weatherData.main.pressure}</p>
                            </div>
                            <div className='d-flex justify-content-between mt-1 tile'>
                                <p>Wind speed</p>
                                <p>{weatherData.wind.speed} miles/hour</p>
                            </div>
                        </div> : null}
                </div>
            </aside>
        </>
    )
}

export default SideBar