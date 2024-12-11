import { motion } from "motion/react";
import WindyMap from "./WindyMap";

export default function WindMap({ weatherData, lat, lon }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="col-span-6 row-span-2 md:col-span-2 md:row-span-2"
        >   
            <span className="flex flex-row space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="15px" viewBox="0 -960 960 960" width="20px" fill="rgba(255, 255, 255, 0.7)"><path d="M456-144q-50 0-85-35t-35-85h72q0 20 13.8 34t34.2 14q20.4 0 34.2-13.8Q504-243.6 504-264q0-20.4-13.8-34.2Q476.4-312 456-312H96v-72h360q50 0 85 35t35 85q0 50-35 85t-85 35ZM96-552v-72h540q25 0 42.5-17.5T696-684q0-25-17.5-42.5T636-744q-25 0-42.5 17.5T576-684h-72q0-55 38.5-93.5T636-816q55 0 93.5 38.5T768-684q0 55-38.5 93.5T636-552H96Zm636 312v-72q25 0 42.5-17.5T792-372q0-25-17.5-42.5T731.95-432H96v-72h636q55 0 93.5 38.5T864-372q0 55-38.5 93.5T732-240Z"/></svg>
                <p className="font-light text-sm text-white/70">wind map</p>
            </span>
            <WindyMap lat={lat} lon={lon} />
        </motion.div>
    );
}
