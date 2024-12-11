import { motion } from "motion/react";

export default function UVIndex({ weatherData, uviMessage, onClick }) {
    return(
        <motion.div
            className='col-span-3 md:col-span-1'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
        >
            <span className="flex flex-row space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="15px" viewBox="0 -960 960 960" width="20px" fill="rgba(255, 255, 255, 0.7)"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"/></svg>
                <p className="font-light text-sm text-white/70">uvi</p>
            </span>
            {weatherData ? (
                <>
                    <p className='text-xl font-bold'>{weatherData.current.uvi}</p>
                    <p className='text-sm font-medium'>{uviMessage}</p>
                    
                </>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </motion.div>
    );
}