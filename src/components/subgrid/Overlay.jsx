import { motion } from "motion/react";
import HourlyChart from "./charts/HourlyChart";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import DailyChart from "./charts/DailyChart";
import UVIndexChart from "./charts/UVChart";
import SunriseSunsetChart from "./charts/SunriseChart";
import FeelsLikeChart from "./charts/FeelsLikeChart";
import { HumidityChart, PressureChart, VisibilityChart } from "./charts/HumPresVisChart"
import { CustomTooltip } from '@/components/utils/CustomTooltip';

export default function Overlay({ type, data }) {
    const overlayVariants = {
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: 'easeOut' } },
        exit: { opacity: 0.3, scale: 0.5, transition: { duration: 0.15, ease: 'easeIn' } },
    };

    const renderContent = () => {
        if (type === 'chart') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M500-40q-25 0-42.5-17T440-99q0-12 4.5-23t13.5-19l42-39 42 39q9 8 13.5 19t4.5 23q0 25-17.5 42T500-40Zm-138-60-42-42 118-118 42 42-118 118Zm258-60-60-60 60-60 60 60-60 60Zm-360 0-60-60 60-60 60 60-60 60Zm40-160q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Hourly Forecast</h2>
                    </div>
                    <HourlyChart weatherData={data} />
                </>
            );
        }

        if (type === 'dailyChart') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Zm264.21 216q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 144q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Daily Forecast</h2>
                    </div>
                    <DailyChart weatherData={data} />
                </>
            )
        } 

        if (type === 'UVChart') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">UV Chart</h2>
                    </div>
                    <UVIndexChart weatherData={data} />
                </>
            )
        } 

        if (type === 'Sunrise') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m723-524-51-51 85-85 50 51-84 85ZM96-144v-72h768v72H96Zm348-504v-120h72v120h-72ZM234-524l-85-85 51-51 85 85-51 51Zm42 164h408q-22-64-77-104t-127-40q-72 0-127 40t-77 104Zm-84 72q0-120 83.76-204t204-84Q600-576 684-492.17q84 83.83 84 204.17H192Zm288-72Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Sunrise</h2>
                    </div>
                    <SunriseSunsetChart weatherData={data} />
                </>
            )
        } 

        if (type === 'FeelsLike') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M479.77-96Q400-96 344-152.16 288-208.32 288-288q0-45.07 18-84.03Q324-411 360-437v-307q0-50 35-85t85-35q50 0 85 35t35 85v307q35 26 53.5 65.5T672-288q0 79.68-56.23 135.84Q559.55-96 479.77-96ZM432-528h96v-48h-48v-48h48v-48h-48v-48h48v-24q0-20.4-13.8-34.2Q500.4-792 480-792q-20.4 0-34.2 13.8Q432-764.4 432-744v216Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Feels Like</h2>
                    </div>
                    <FeelsLikeChart weatherData={data} />
                </>
            )
        } 

        if (type === 'Humidity') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M508-218q8-1 14-7.5t6-16.5q0-11-8-18t-19-5q-58 8-106.5-27T337-387q-1-9-7.5-15t-15.5-6q-11 0-18.5 8t-5.5 19q11 78 74 126t144 37ZM480-96q-130 0-221-91t-91-221q0-97 74.5-205T480-864q166 150 239 257t73 199q0 130-91 221T480-96Zm0-72q100 0 170-70t70-170q0-68-54-149T480-769Q348-638 294-557t-54 149q0 100 70 170t170 70Zm0-312Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Humidity</h2>
                    </div>
                    <HumidityChart weatherData={data} />
                </>
            )
        } 

        if (type === 'Pressure') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M192-384v-72h576v72H192Zm0-120v-72h576v72H192ZM444-96v-102l-57 57-51-51 144-144 144 144-51 51-57-57v102h-72Zm36-528L336-768l51-51 57 57v-102h72v102l57-57 51 51-144 144Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Pressure</h2>
                    </div>
                    <PressureChart weatherData={data} />
                </>
            )
        } 

        if (type === 'Visibility') {
            return (
                <>
                    <div className="flex flex-row justify-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z"/></svg>
                        <h2 className="font-bold text-lg mb-4 text-center">Visibility</h2>
                    </div>
                    <VisibilityChart weatherData={data} />
                </>
            )
        } 
        

        if (type === 'airQuality') {
            const isError = data?.error;

            if (isError) {
                return; 
            }
            const domPollutantInfo = data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.additionalInfo.sources;
            const domPollutantEffects = data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.additionalInfo.effects;
            const domPollutantFullName = data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.displayName.includes('PM10') ? (
                "Particulates Under 10 μm"
            ) : (
                data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.displayName.includes('PM2.5') ? (
                    "Particulates Under 2.5 μm"
                ) : (
                    data.pollutants.find((item) => item.code === data.indexes[0].dominantPollutant)?.fullName
                )
            );

            const chartData = data.pollutants.map((pollutant) => ({
                name: pollutant.displayName,
                value: pollutant.concentration.value,
            }));
        
            const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"];

            return(
                <>
                    <div className="flex flex-row justify-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M120-380q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm120 340q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm0-160q-17 0-28.5-11.5T200-400q0-17 11.5-28.5T240-440q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360Zm0-160q-17 0-28.5-11.5T200-560q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560q0 17-11.5 28.5T240-520Zm0-160q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 340q-25 0-42.5-17.5T340-400q0-25 17.5-42.5T400-460q25 0 42.5 17.5T460-400q0 25-17.5 42.5T400-340Zm0-160q-25 0-42.5-17.5T340-560q0-25 17.5-42.5T400-620q25 0 42.5 17.5T460-560q0 25-17.5 42.5T400-500Zm0 300q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200Zm0-480q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760q17 0 28.5 11.5T440-720q0 17-11.5 28.5T400-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 480q-25 0-42.5-17.5T500-400q0-25 17.5-42.5T560-460q25 0 42.5 17.5T620-400q0 25-17.5 42.5T560-340Zm0-160q-25 0-42.5-17.5T500-560q0-25 17.5-42.5T560-620q25 0 42.5 17.5T620-560q0 25-17.5 42.5T560-500Zm0 300q-17 0-28.5-11.5T520-240q0-17 11.5-28.5T560-280q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200Zm0-480q-17 0-28.5-11.5T520-720q0-17 11.5-28.5T560-760q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 620q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200Zm0-160q-17 0-28.5-11.5T680-400q0-17 11.5-28.5T720-440q17 0 28.5 11.5T760-400q0 17-11.5 28.5T720-360Zm0-160q-17 0-28.5-11.5T680-560q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560q0 17-11.5 28.5T720-520Zm0-160q-17 0-28.5-11.5T680-720q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720q0 17-11.5 28.5T720-680Zm120 300q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Z"/></svg>
                        <h2 className="font-bold text-lg mb-3 text-center">Air Quality</h2>
                    </div>
                    <div className="w-[80vw] md:w-[25vw] h-[50vh] divide-y divide-dashed space-y-4 text-base font-thin overflow-x-hidden no-scrollbar">
                        <div>
                            <p className="font-bold text-lg">{data.indexes[0]?.category || 'N/A'}</p>
                            <p className="text-base mb-4 text-gray-400">Scale: {data.indexes[0]?.displayName}</p>
                            <p>Air quality index is {data.indexes[0]?.aqiDisplay}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg mb-4">Health Information</p>
                            <p>{data.healthRecommendations?.generalPopulation || 'No recommendations available.'}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Primary Pollutant</p>
                            <p className="text-base mb-4 text-gray-400">{domPollutantFullName || 'N/A'}</p>
                            <p className="font-bold">Sources:</p>
                            <p className="mb-4">{domPollutantInfo}</p>
                            <p className="font-bold">Effects:</p>
                            <p>{domPollutantEffects}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg mb-4">Pollutant Details</p>
                            <div>
                                {data.pollutants?.map((pollutant) => (
                                    <div key={pollutant.code}>
                                        <div className="flex flex-row min-w-width justify-between items-center">
                                            <div className="left-0 w-[20%] text-left text-gray-400">{pollutant.displayName}</div>
                                            <div className="w-[46%]">{pollutant.displayName.includes('PM') ? 'Particulates' : pollutant.fullName}</div>
                                            <div className="right-0 w-[33%] text-right text-gray-400">{pollutant.concentration.value.toFixed(0)} ppb</div>
                                        </div>
                                    </div>
                                )) || 'No pollutant data available.'}
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold mb-4">Pollutant Distribution (Pie)</p>
                            <div className="flex w-full justify-center">
                                <PieChart width={300} height={300}>
                                    <Pie
                                        data={chartData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label
                                    >
                                        {chartData.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip/>} />
                                </PieChart>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold mb-4">Pollutant Concentrations (Bar)</p>
                            <div className="flex w-full">
                                <BarChart width={400} height={250} data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <Tooltip content={<CustomTooltip/>} />
                                    <Bar dataKey="value" fill="#007FFF" />
                                </BarChart>
                            </div>
                        </div>
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
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10"
        >
            <div className="bg-black/80 backdrop-blur text-white p-3 rounded-3xl overflow-hidden max-w-[90vw] md:max-w-[80vw] break-words border-solid border border-gray-500">
                {renderContent()}
            </div>
        </motion.div>
    );
}
