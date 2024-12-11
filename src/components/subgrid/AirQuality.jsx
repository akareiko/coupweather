import { motion } from "motion/react";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function AirQuality({ airQualityData, onClick }) {
    const svgRef = useRef(null);
    const isError = airQualityData?.error;

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear existing content

        if (isError) return; // Skip rendering on error

        // Define dimensions dynamically using viewBox
        const width = 300; // Virtual width
        const height = 100; // Virtual height
        svg.attr("viewBox", `0 0 ${width} ${height}`);

        // Create or reuse the gradient
        const gradientId = "pastel-gradient";
        const defs = svg.select("defs");
        if (defs.empty()) svg.append("defs");
        const gradient = svg.select(`#${gradientId}`).empty()
            ? svg.select("defs")
                  .append("linearGradient")
                  .attr("id", gradientId)
                  .attr("x1", "0%")
                  .attr("y1", "0%")
                  .attr("x2", "100%")
                  .attr("y2", "0%")
            : svg.select(`#${gradientId}`);

        gradient.selectAll("stop").remove(); // Clear old stops
        gradient.append("stop").attr("offset", "0%").attr("stop-color", "#4A90E2");
        gradient.append("stop").attr("offset", "25%").attr("stop-color", "#50E3C2");
        gradient.append("stop").attr("offset", "50%").attr("stop-color", "#F5A623");
        gradient.append("stop").attr("offset", "80%").attr("stop-color", "#D0021B");
        gradient.append("stop").attr("offset", "100%").attr("stop-color", "#D0021B");

        svg.append("rect")
            .attr("x", 0)
            .attr("y", height * 0.3)
            .attr("width", width)
            .attr("height", height * 0.2)
            .attr("rx", height * 0.05)
            .attr("fill", `url(#${gradientId})`);

        if (airQualityData) {
            const aqi = airQualityData.indexes[0]?.aqi || 0;
            const xScale = d3.scaleLinear().domain([100, 0]).range([0, width]);

            svg.append("circle")
                .attr("cx", xScale(aqi))
                .attr("cy", height * 0.4)
                .attr("r", height * 0.1)
                .attr("fill", "rgba(255, 255, 255, 0.8)")
                .attr("stroke", "rgba(0, 0, 0, 0.4)")
                .attr("stroke-width", 1)
                .style("filter", "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))");
        }
    }, [airQualityData, isError]);

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
            className="col-span-6 row-span-2 md:col-span-2 md:row-span-1"
        >
            <div className="flex flex-row justify-between">
                <div className="w-[40%]">
                    <span className="flex flex-row space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="15px" viewBox="0 -960 960 960" width="20px" fill="rgba(255, 255, 255, 0.7)"><path d="M120-380q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm120 340q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm0-160q-17 0-28.5-11.5T200-400q0-17 11.5-28.5T240-440q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360Zm0-160q-17 0-28.5-11.5T200-560q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560q0 17-11.5 28.5T240-520Zm0-160q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 340q-25 0-42.5-17.5T340-400q0-25 17.5-42.5T400-460q25 0 42.5 17.5T460-400q0 25-17.5 42.5T400-340Zm0-160q-25 0-42.5-17.5T340-560q0-25 17.5-42.5T400-620q25 0 42.5 17.5T460-560q0 25-17.5 42.5T400-500Zm0 300q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200Zm0-480q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760q17 0 28.5 11.5T440-720q0 17-11.5 28.5T400-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 480q-25 0-42.5-17.5T500-400q0-25 17.5-42.5T560-460q25 0 42.5 17.5T620-400q0 25-17.5 42.5T560-340Zm0-160q-25 0-42.5-17.5T500-560q0-25 17.5-42.5T560-620q25 0 42.5 17.5T620-560q0 25-17.5 42.5T560-500Zm0 300q-17 0-28.5-11.5T520-240q0-17 11.5-28.5T560-280q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200Zm0-480q-17 0-28.5-11.5T520-720q0-17 11.5-28.5T560-760q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680Zm0 580q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-720q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 620q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200Zm0-160q-17 0-28.5-11.5T680-400q0-17 11.5-28.5T720-440q17 0 28.5 11.5T760-400q0 17-11.5 28.5T720-360Zm0-160q-17 0-28.5-11.5T680-560q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560q0 17-11.5 28.5T720-520Zm0-160q-17 0-28.5-11.5T680-720q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720q0 17-11.5 28.5T720-680Zm120 300q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm0-160q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Z"/></svg>
                        <p className="font-light text-sm text-white/70">air quality</p>
                    </span>
                    {isError ? (
                        <p className="text-sm text-white/70">"No data available"</p>
                    ) : airQualityData ? (
                        <>
                            <p className="text-xl font-bold">{airQualityData.indexes[0]?.aqi || "N/A"}</p>
                            <p className="text-sm font-medium">{airQualityData.indexes[0]?.category || "Loading..."}</p>
                        </>
                    ) : (
                        <p className="text-sm text-gray-500">Loading...</p>
                    )}
                </div>
                <div className="w-[40%]">
                    <p className="font-light text-white/70 text-right">gradient</p>
                    <svg ref={svgRef} className="w-full h-auto" aria-labelledby="air-quality-svg">
                        <title id="air-quality-svg">Air quality visual representation</title>
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}