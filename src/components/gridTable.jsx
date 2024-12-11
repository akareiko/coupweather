import { useState, useEffect, useRef } from 'react';
import HourlyForecast from './subgrid/HourlyForecast';
import DailyForecast from './subgrid/DailyForecast';
import AirQuality from './subgrid/AirQuality';
import WindMap from './subgrid/WindMap';
import Overlay from './subgrid/Overlay';
import UVIndex from './subgrid/UVIndex';
import Sunrise from './subgrid/Sunrise';
import FeelsLike from './subgrid/FeelsLike';
import Humidity from './subgrid/Humidity';
import Pressure from './subgrid/Pressure';
import Visibility from './subgrid/Visibility';
import { AnimatePresence } from "motion/react";

export default function GridTable({ weatherData, airQualityData, uviMessage, lat, lon}) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayType, setOverlayType] = useState(null);
    const [overlayData, setOverlayData] = useState(null);
    const gridRef = useRef(null);
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

    const handleDailyForecastClick = () => {
        setOverlayType('dailyChart');
        setOverlayData(weatherData);
        setShowOverlay(true);
    }

    const handleUVForecastClick = () => {
        setOverlayType('UVChart');
        setOverlayData(weatherData);
        setShowOverlay(true);
    }

    const handleSunriseClick = () => {
        setOverlayType('Sunrise');
        setOverlayData(weatherData);
        setShowOverlay(true);
    }

    const handleFeelsLikeClick = () => {
        setOverlayType('FeelsLike');
        setOverlayData(weatherData);
        setShowOverlay(true);
    }

    const handleHumidityClick = () => {
        setOverlayType('Humidity');
        setOverlayData(weatherData);
        setShowOverlay(true);
    }

    const handlePressureClick = () => {
        setOverlayType('Pressure');
        setOverlayData(weatherData);
        setShowOverlay(true);
    }

    const handleVisibilityClick = () => {
        setOverlayType('Visibility');
        setOverlayData(weatherData);
        setShowOverlay(true);
    }

    const handleOutsideClick = (e) => {
        if (gridRef.current && !gridRef.current.contains(e.target)) {
            setShowOverlay(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return(
        <>
        <div className="grid grid-cols-6 grid-rows-13 md:grid-rows-5 gap-4 md:h-[70vh] w-[90vw] md:w-[80vw] mt-[1%]" ref={gridRef} style={{ scale: 0.96 }}>
            <HourlyForecast weatherData={weatherData} onClick={handleHourlyForecastClick}/>
            <DailyForecast weatherData={weatherData} onClick={handleDailyForecastClick}/>
            <AirQuality airQualityData={airQualityData} onClick={handleAirQualityClick}/>
            <WindMap weatherData={weatherData} lat={lat} lon={lon}/>
            <UVIndex weatherData={weatherData} uviMessage={uviMessage} onClick={handleUVForecastClick}/>
            <Sunrise weatherData={weatherData} onClick={handleSunriseClick}/>
            <FeelsLike weatherData={weatherData} onClick={handleFeelsLikeClick}/>
            <Humidity weatherData={weatherData} onClick={handleHumidityClick}/>
            <Pressure weatherData={weatherData} onClick={handlePressureClick}/>
            <Visibility weatherData={weatherData} onClick={handleVisibilityClick}/>
        </div>
        <AnimatePresence>
            {showOverlay && 
                <Overlay 
                    type={overlayType} 
                    data={overlayData}  
                />}
        </AnimatePresence>
        </>
    );
}