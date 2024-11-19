import { motion } from "motion/react";
import { render } from "react-dom";
import HourlyChart from "./HourlyChart";

export default function Overlay({ type, data, onClose }) {
    const overlayVariants = {
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: 'easeOut' } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1, ease: 'easeIn' } },
    };

    const renderContent = () => {
        if (type === 'chart') {
            return (
                <>
                    <h2 className="font-bold text-lg mb-4">Hourly Forecast</h2>
                    <HourlyChart weatherData={data} />
                </>
            );
        }

        if (type === 'airQuality') {
            return(
                <>
                    <h2 className="font-bold text-lg mb-4">Air Quality</h2>
                    <p>{data.indexes[0]?.category || 'N/A'}</p>
                    <hr className="my-4 border-gray-500" />
                    <h2 className="font-bold text-lg mb-4">Health Information</h2>
                    <p>{data.healthRecommendations?.generalPopulation || 'No recommendations available.'}</p>
                    <hr className="my-4 border-gray-500" />
                    <h2 className="font-bold text-lg mb-4">Primary Pollutant</h2>
                    <p>{data.indexes[0]?.dominantPollutant || 'N/A'}</p>
                    <hr className="my-4 border-gray-500" />
                    <h2 className="font-bold text-lg mb-4">Pollutant Details</h2>
                    <div>
                        {data.pollutants?.map((pollutant) => (
                            <div key={pollutant.code}>
                                <div className="flex flex-row min-w-width justify-between items-center">
                                    <div className="left-0 w-[20%]">{pollutant.displayName}</div>
                                    <div>{pollutant.displayName.includes('PM') ? 'Particulates' : pollutant.fullName}</div>
                                    <div className="right-0 w-[30%]">{pollutant.concentration.value.toFixed(0)} ppb</div>
                                </div>
                            </div>
                        )) || 'No pollutant data available.'}
                    </div>
                </>
            )
        }
    };

    return (
        <motion.div 
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10"
        >
            <div className="bg-black/80 text-white p-8 rounded-md overflow-auto max-w-[80vw] break-words border-solid border border-gray-500">
                {renderContent()}
            </div>
        </motion.div>
    );
}
