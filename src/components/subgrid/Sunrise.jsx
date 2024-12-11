import { motion } from "motion/react";

export default function Sunrise({ weatherData, onClick }) {
    return(
        <motion.div
            className='col-span-3 md:col-span-1'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
        >
            <span className="flex flex-row space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="15px" viewBox="0 -960 960 960" width="20px" fill="rgba(255, 255, 255, 0.7)"><path d="m723-524-51-51 85-85 50 51-84 85ZM96-144v-72h768v72H96Zm348-504v-120h72v120h-72ZM234-524l-85-85 51-51 85 85-51 51Zm42 164h408q-22-64-77-104t-127-40q-72 0-127 40t-77 104Zm-84 72q0-120 83.76-204t204-84Q600-576 684-492.17q84 83.83 84 204.17H192Zm288-72Z"/></svg>
                <p className="font-light text-sm text-white/70">sunrise</p>
            </span>
            {weatherData ? (
                <>
                    <p className='text-xl font-bold'>{new Date(weatherData.current.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}</p>
                    <p className="text-sm font-medium">Sunset: {new Date(weatherData.current.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}</p>
                </>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}