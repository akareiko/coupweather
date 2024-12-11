import { motion, AnimatePresence } from "framer-motion";
import RainWithClouds from "./RainClouds"; 
import NightStars from "./ClearSky";
import Clouds from "./Clouds"

export default function WeatherBackground({ weatherData }) {
    if (!weatherData) return <div>Loading...</div>;

    const weatherBackgrounds = {
        "01n": "bg-gradient-to-t from-slate-900 to-black",  // Clear sky night
        "01d": "bg-gradient-to-t from-blue-300 to-blue-500",  // Clear sky day
        "02n": "bg-gradient-to-t from-slate-700 to-black",  // Few clouds night
        "02d": "bg-gradient-to-t from-blue-300 to-slate-500",  // Few clouds day
        "03n": "bg-gradient-to-t from-slate-700 to-black",  // Scattered clouds night
        "03d": "bg-gradient-to-t from-blue-300 to-slate-800",  // Scattered clouds day
        "04n": "bg-gradient-to-t from-slate-700 to-black",  // Broken clouds night
        "04d": "bg-gradient-to-t from-blue-300 to-slate-1000",  // Broken clouds day
        "09n": "bg-gradient-to-t from-slate-700 to-black",  // Shower rain night
        "09d": "bg-gradient-to-t from-zinc-700 to-slate-1000",  // Shower rain day
        "10n": "bg-gradient-to-t from-slate-700 to-black",  // Rain night
        "10d": "bg-gradient-to-t from-blue-200 to-zinc-500",  // Rain day
        "11n": "bg-gradient-to-t from-slate-700 to-black",  // Thunderstorm night
        "11d": "bg-gradient-to-t from-black to-slate-500",  // Thunderstorm day
        "13n": "bg-gradient-to-t from-black to-white",  // Snow night
        "13d": "bg-gradient-to-t from-blue-300 to-white",  // Snow day
        "50n": "bg-gradient-to-t from-slate-600 to-black",  // Mist night
        "50d": "bg-gradient-to-t from-slate-600 to-black",  // Mist day
        default: "bg-gradient-to-t from-blue-300 to-blue-500",  // Default background
    };

    const backgroundClass =
        weatherBackgrounds[weatherData?.current?.weather?.[0]?.icon] || weatherBackgrounds.default;

    // Render scene based on weather condition
    const renderScene = () => {
        const weatherIcon = weatherData?.current?.weather?.[0]?.icon;
        
        switch(weatherIcon) {
            case '01d':
            case '01n':
                return <NightStars />;
            case '03d':
                return <Clouds />;
            case '03n':
                return <Clouds />;
            case '04d':
                return <Clouds />;
            case '04n':
                return <Clouds />;
            case '09d':
            case '09n':
                return <RainWithClouds />;
            case '10d':
            case '10n':
                return <RainWithClouds />;
            case '13d':
            case '13n':
            default:
                return <Clouds />;
        }
    };

    return (
        <div className="fixed h-screen w-screen">
            <AnimatePresence mode="wait">
                <motion.div 
                    className="absolute inset-0 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {renderScene()}
                </motion.div>
                <motion.div
                    key={backgroundClass}
                    className={`absolute inset-0 ${backgroundClass} -z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>
        </div>
    );
}