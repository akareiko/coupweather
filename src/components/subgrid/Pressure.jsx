import { motion } from "motion/react";

export default function Pressure({ weatherData, onClick }) {
    return(
        <motion.div
            className='col-span-3 md:col-span-1'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={ onClick }
        >
            <span className="flex flex-row space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="15px" viewBox="0 -960 960 960" width="20px" fill="rgba(255, 255, 255, 0.7)"><path d="M192-384v-72h576v72H192Zm0-120v-72h576v72H192ZM444-96v-102l-57 57-51-51 144-144 144 144-51 51-57-57v102h-72Zm36-528L336-768l51-51 57 57v-102h72v102l57-57 51 51-144 144Z"/></svg>
                <p className="font-light text-sm text-white/70">pressure</p>
            </span>
            {weatherData ? (
                <p className="text-xl font-bold">{weatherData.current.pressure} hPa</p>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}