'use client';
import { motion } from "motion/react";
import { useState } from "react";

export default function Flot() {
    const pollutants = [
        { title: "PM", description: "Particulate Matter" },
        { title: "NO", description: "Nitrogen Oxides  " },
        { title: "SO", description: "Sulfur Oxides    " },
        // { title: "CO", description: "Carbon Monoxide  " },
        // { title: "O3", description: "Ozone            " },
        // { title: "VOC", description: "Volatile Organic Compounds" },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const typingVariants = {
        hidden: { opacity: 0, width: "0ch" },
        visible: (descriptionLength) => ({
            opacity: 1,
            width: `${descriptionLength}ch`,
            transition: {
                duration: descriptionLength * 0.1, // Duration depends on text length
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="mt-40">
            <h1 className="text-4xl font-bold text-white-600 text-center">
                Major Air Pollutants
            </h1>
            <p className="text-lg text-white-700 mt-4 text-center">
                Key contaminants impacting air quality and human health
            </p>
            <div className="flex flex-col items-center justify-between pl-20 pr-20 mt-40">
                <div className="grid grid-cols-3 gap-4">
                    {pollutants.map((pollutant, index) => (
                        <motion.div
                            key={index}
                            initial={{ borderRadius: "50%", width: "25vw", height: "25vw" }}
                            whileHover={{
                                borderRadius: "0%",
                                width: "25vw",
                                height: "25vw",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative flex items-center justify-center overflow-hidden"
                            style={{
                                backgroundColor: "#ffffff",
                                cursor: "pointer",
                            }}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            {activeIndex !== index && (
                                <p className="absolute text-black text-7xl">
                                    {pollutant.title}
                                </p>
                            )}

                            {activeIndex === index && (
                                <motion.p
                                    className="absolute text-black text-xl text-center px-4"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={typingVariants}
                                    custom={pollutant.description.length}
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        display: "inline-block",
                                    }}
                                >
                                    {pollutant.description}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
