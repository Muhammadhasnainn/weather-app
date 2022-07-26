import React, { useState } from 'react'
import "../App.css";
import { WeatherState } from '../Contexts/context';
import SideBar from './SideBar';

const Background = () => {
    const { weatherData } = WeatherState();
    const date = new Date();
    const [time, setTime] = useState(null);


    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const month = monthNames[date.getMonth()]
    const day = dayNames[date.getDay()]

    setTimeout(() => {
        setTime(date.toLocaleTimeString('en-US'))
    }, 1000);

    return (
        <>
            <section>
                <SideBar />
                <div className='RightBar'>
                    <div className='temp'>
                        <h1>{weatherData.main ? Math.round((weatherData.main.temp - 32) * 5 / 9) + "°C" : null}</h1>
                    </div>
                    <div className='time'>
                        <h1>{time}</h1>
                        <div className='d-flex'>
                            <h1>{day},</h1>
                            <h1 className='ms-3'>{date.getDate()}</h1>
                            <h1 className='ms-3'>{month}</h1>
                            <h1 className='ms-3'>{date.getFullYear()}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Background