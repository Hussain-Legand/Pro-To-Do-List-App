import { useState, useEffect } from "react";

function Weather() {
    // Js Part
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState(null);

    useEffect(() => {

        setTimeout(() => {

            setWeather({
                city: "Port Said",
                temp: 28,
                condition: "Sunny"
            });

            setLoading(false);

        }, 2000)

    }, []);
    return (
        // Html Part

        <div>
            {loading ? (
                <h1>Searching for Sun ...</h1>
            ) : (
                <div>
                    <h1>City: {weather.city}</h1>
                    <h2>Temperature: {weather.temp}</h2>
                    <h3>Condition: {weather.condition}</h3>
                </div>
            )}
        </div>
    );
}

export default Weather;