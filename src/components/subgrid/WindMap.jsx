import { motion } from "motion/react";

export default function WindMap({ weatherData }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="col-span-2 row-span-2"
        >
            <p className='font-light text-gray-400'>wind map</p>
            {weatherData ? (
                <>
                    <p>Wind: {weatherData.current.wind_speed} m/s</p>
                    <p>Direction: {weatherData.current.wind_deg}°</p>
                </>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}
