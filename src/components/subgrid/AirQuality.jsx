import { motion } from "motion/react";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function AirQuality({ airQualityData, onClick }) {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Clear existing content
        svg.selectAll("*").remove();

        // Get parent container dimensions
        const parent = svg.node().parentElement;
        const width = parent.offsetWidth;
        const height = parent.offsetHeight;

        // Set up scales
        const xScale = d3.scaleLinear().domain([0, 500]).range([0, width]);

        // Gradient definition
        const gradientId = "pastel-gradient";
        const defs = svg.append("defs");
        const gradient = defs
            .append("linearGradient")
            .attr("id", gradientId)
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        // Add pastel colors
        gradient.append("stop").attr("offset", "0%").attr("stop-color", "#A3D8F4"); // pastel blue
        gradient.append("stop").attr("offset", "25%").attr("stop-color", "#B8E4C6"); // pastel green
        gradient.append("stop").attr("offset", "50%").attr("stop-color", "#F7E3AF"); // pastel yellow
        gradient.append("stop").attr("offset", "75%").attr("stop-color", "#F9C7CF"); // pastel pink
        gradient.append("stop").attr("offset", "100%").attr("stop-color", "#E9A1A1"); // soft deep red

        // Draw rounded line
        svg.append("rect")
            .attr("x", 0)
            .attr("y", height / 4)
            .attr("width", 3 * width / 2)
            .attr("height", height / 2)
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("fill", `url(#${gradientId})`);

        if (airQualityData) {
            const aqi = airQualityData.indexes[0]?.aqi || 0;
            svg.append("circle")
                .attr("cx", xScale(aqi))
                .attr("cy", height / 2)
                .attr("r", 10)
                .attr("fill", "white")
                .attr("stroke", "#000")
                .attr("stroke-width", 1);
        }
    }, [airQualityData]);

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="col-span-2" // Ensure the parent has defined width and height
        >
            <div className="flex flex-row justify-between">
                <div className="w-[40%]">
                    <p className="font-light text-gray-400">air quality</p>
                    {airQualityData ? (
                        <>
                            <p className="text-xl font-bold">{airQualityData.indexes[0]?.aqi || "N/A"}</p>
                            <p className="text-sm font-medium">{airQualityData.indexes[0]?.category || "Loading..."}</p>
                        </>
                    ) : (
                        <p className="text-sm text-gray-500">Loading...</p>
                    )}
                </div>
                <div className="w-[40%] ">
                    <p className="font-light text-gray-400 text-right">gradient</p>
                    <svg
                        ref={svgRef}
                        viewBox="-90 40 300 50" // Adjust to match your aspect ratio
                        // preserveAspectRatio="xMidYMid meet"
                        width="100%"
                        height="100%"
                    ></svg>
                </div>
            </div>
        </motion.div>
    );
}
