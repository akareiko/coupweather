import { motion } from "motion/react";

export default function Humidity({ weatherData, onClick }) {
    return(
        <motion.div
            className='col-span-3 md:col-span-1'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={ onClick }
        >
            <span className="flex flex-row space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="15px" viewBox="0 -960 960 960" width="20px" fill="rgba(255, 255, 255, 0.7)"><path d="M508-218q8-1 14-7.5t6-16.5q0-11-8-18t-19-5q-58 8-106.5-27T337-387q-1-9-7.5-15t-15.5-6q-11 0-18.5 8t-5.5 19q11 78 74 126t144 37ZM480-96q-130 0-221-91t-91-221q0-97 74.5-205T480-864q166 150 239 257t73 199q0 130-91 221T480-96Zm0-72q100 0 170-70t70-170q0-68-54-149T480-769Q348-638 294-557t-54 149q0 100 70 170t170 70Zm0-312Z"/></svg>
                <p className="font-light text-sm text-white/70">humidity</p>
            </span>
            {weatherData ? (
                <>
                    <p className="text-xl font-bold">{weatherData.current.humidity}%</p>
                    <p className="text-sm font-medium">The dew point is {(weatherData.current.dew_point - 273.15).toFixed(1)}°</p>
                </>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}