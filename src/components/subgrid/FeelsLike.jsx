import { motion } from "motion/react";

export default function FeelsLike({ weatherData, onClick }) {
    return(
        <motion.div
            className='col-span-3 md:col-span-1'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
        >
            <span className="flex flex-row space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="15px" viewBox="0 -960 960 960" width="20px" fill="rgba(255, 255, 255, 0.7)"><path d="M479.77-96Q400-96 344-152.16 288-208.32 288-288q0-45.07 18-84.03Q324-411 360-437v-307q0-50 35-85t85-35q50 0 85 35t35 85v307q35 26 53.5 65.5T672-288q0 79.68-56.23 135.84Q559.55-96 479.77-96ZM432-528h96v-48h-48v-48h48v-48h-48v-48h48v-24q0-20.4-13.8-34.2Q500.4-792 480-792q-20.4 0-34.2 13.8Q432-764.4 432-744v216Z"/></svg>
                <p className="font-light text-sm text-white/70">feels like</p>
            </span>
            {weatherData ? (
                <>
                    <p className='text-xl font-bold'>{(weatherData.current.feels_like - 273.15).toFixed(0)}°</p>
                    <p className="text-sm font-medium">Actual: {(weatherData.current.temp - 273.15).toFixed(0)}°</p>
                </>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}