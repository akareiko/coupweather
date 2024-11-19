'use client';

import { useState, useEffect, useRef } from 'react';
import HourlyForecast from './subgrid/HourlyForecast';
import DailyForecast from './subgrid/DailyForecast';
import AirQuality from './subgrid/AirQuality';
import WindMap from './subgrid/WindMap';
import Overlay from './subgrid/Overlay';
import { motion } from "motion/react";

export default function Grid() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayType, setOverlayType] = useState(null);
    const [overlayData, setOverlayData] = useState(null);
    const [airQualityData, setAirQualityData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const gridRef = useRef(null);

    const fetchAirQualityData = async (latitude, longitude) => {
        try {
            const response = await fetch(
                'https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyAfZbGUWpif8YB63j63UKVbsTplI8ZdvBE',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        location: {
                            latitude,
                            longitude,
                        },
                        extraComputations: [
                            "HEALTH_RECOMMENDATIONS",
                            "DOMINANT_POLLUTANT_CONCENTRATION",
                            "POLLUTANT_CONCENTRATION",
                            "LOCAL_AQI",
                            "POLLUTANT_ADDITIONAL_INFO",
                        ],
                    }),
                }
            );
            const result = await response.json();
            setAirQualityData(result);
        } catch (error) {
            console.error('Error fetching air quality data:', error);
        }
    };

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=d5c90f7ff7a52c654ba7724998f3c44a`
            );
            const result = await response.json();
            setWeatherData(result);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleHourlyForecastClick = () => {
        setOverlayType('chart');
        setOverlayData(weatherData);
        setShowOverlay(true);
    };

    const handleAirQualityClick = () => {
        setOverlayType('airQuality');
        setOverlayData(airQualityData);
        setShowOverlay(true);
    };

    const handleOutsideClick = (e) => {
        if (gridRef.current && !gridRef.current.contains(e.target)) {
            setShowOverlay(false);
        }
    };

    useEffect(() => {
        const getCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    fetchAirQualityData(latitude, longitude);
                    fetchWeatherData(latitude, longitude);
                }, (error) => {
                    console.error('Error getting location:', error);
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        };

        getCurrentLocation();
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div>
            {/* <HourlyChart weatherData={weatherData}/> */}
            {/* <div id='search'>search</div> */}
            <div className="flex min-h-screen items-center">
                <div className="grid grid-cols-6 grid-rows-5 gap-4 h-[70vh]" ref={gridRef}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='col-span-6'
                        onClick={handleHourlyForecastClick}
                    >
                        {/* <h3 className="text-lg mb-4">Hourly Forecast</h3> */}
                        <HourlyForecast weatherData={weatherData} />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='col-span-2 row-span-3'
                    >
                        <DailyForecast weatherData={weatherData} />
                    </motion.div>
                    <AirQuality airQualityData={airQualityData} onClick={handleAirQualityClick} />
                    <WindMap weatherData={weatherData} />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                    <p className='font-light text-gray-400'>uv index</p>
                        {weatherData ? (
                            <p className='text-xl font-bold'>{weatherData.current.uvi}</p>
                        ) : (
                            <p className="text-sm text-gray-500">Loading...</p>
                        )}
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p className='font-light text-gray-400'>sunrise</p>
                        {weatherData ? (
                            <p className='text-xl font-bold'>{new Date(weatherData.current.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                        ) : (
                            <p className="text-sm text-gray-500">Loading...</p>
                        )}
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p className='font-light text-gray-400'>feels like</p>
                        {weatherData ? (
                            <p  className='text-xl font-bold'>{(weatherData.current.feels_like - 273.15).toFixed(1)}°</p>
                        ) : (
                            <p className="text-sm text-gray-500">Loading...</p>
                        )}
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p className='font-light text-gray-400'>humidity</p>
                        {weatherData ? (
                            <>
                                <p className="text-xl font-bold">{weatherData.current.humidity}%</p>
                                <p className="text-sm font-medium">The dew point is {(weatherData.current.dew_point - 273.15).toFixed(1)}°</p>
                            </>
                        ) : (
                            <p className="text-sm text-gray-500">Loading...</p>
                        )}
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p className='font-light text-gray-400'>pressure</p>
                        {weatherData ? (
                            <p className="text-xl font-bold">{weatherData.current.pressure} hPa</p>
                        ) : (
                            <p className="text-sm text-gray-500">Loading...</p>
                        )}
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p className='font-light text-gray-400'>visibility</p>
                        {weatherData ? (
                            <p className="text-xl font-bold">{weatherData.current.visibility / 1000} Km</p>
                        ) : (
                            <p className="text-sm text-gray-500">Loading...</p>
                        )}
                    </motion.div>

                </div>
            </div>
            {showOverlay && 
                <Overlay 
                    type={overlayType} 
                    data={overlayData} 
                    onClose={() => setOverlayType(null)} 
                />}
        </div>
    );
}


