import { useEffect, useState } from "react";

function RealWeather() {
    // Js Part 

    const [temp, setTemp] = useState(null)
    const [loading, setLoading] = useState(true)

    // useEffect Syntax : useEffect(() => { Block of Code Or Function},[]);

    useEffect(() => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=30.0444&longitude=31.2357&current_weather=true')
        .then((response) => response.json())
        .then((data) => {
            setTemp(data.current_weather.temperature);
            setLoading(false)
        })
    },[]);

    return (
        // Html Part
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {loading ? ( <h1>The Real Temperature is Loading ... </h1> ) : 
            ( <div>
                <h1> 📍 Cairo Now</h1>
                <h2>The Real Temperature is: {temp}°C ☀️</h2>
            </div>)
            } 
        </div>

    )
}

export default RealWeather;