'use client';
import nnn from "../../public/asdsss.jpg"
import nnnaaa from "../../public/odpsofp.jpg"
import nnnaaabbbb from "../../public/pspspspps.jpg"
import { useState } from "react";
import { motion } from "motion/react"
import Image from "next/image";

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
        <div id='target-component' className="mt-40 text-white">
            <h1 className="text-4xl font-light text-center">
                Major Air Pollutants
            </h1>
            <p className="text-lg font-bold mt-4 text-center">
                KEY CONTAMINANTS IMPACTING AIR QUALITY AND HUMAN HEALTH
            </p>
            <div className="flex flex-row items-center justify-center space-x-[3%] mt-[5%] pl-10 pr-10">
                {/* <div className="flex space-x-6"> */}
                    {/* {pollutants.map((pollutant, index) => (
                        
                    ))} */}
                {/* </div> */}
                <div>
                    <div className="cont">
                        <svg className="hehe" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="pathOne" fillRule="evenodd" clipRule="evenodd" d="M0 0H1000V1000H0V0Z M510.974 189.041C643.908 191.717 702.689 340.731 739.002 468.637C769.952 577.653 766.832 702.095 675.792 769.579C582.534 838.706 455.055 817.186 361.502 748.458C269.632 680.967 223.391 568.98 252.818 458.847C288.341 325.898 373.389 186.27 510.974 189.041Z" fill="black"/>
                        </svg>
                        <Image
                            src={nnnaaa}
                            alt="asd"
                            className="imaege"
                        />
                    </div>
                    <p className="text-center font-thin text-4xl">PM</p>
                    <p className="text-center font-thin text-xl">Particulate Matter</p>
                    {/* <p className="hidden md:block text-center font-thin text-sm break-words">
                    PM originates from various sources, including vehicle emissions, industrial processes,
                     construction activities, wildfires, and natural phenomena like volcanic eruptions or dust storms.
                      Once inhaled, these particles can penetrate deep into the respiratory system and even enter the
                       bloodstream, causing health problems such as respiratory infections, asthma, heart disease, and,
                        in severe cases, premature death. Long-term exposure to PM can lead to chronic conditions like
                         lung cancer and reduced lung function.
                    </p> */}
                </div>
                <div>
                    <div className="cont">
                        <svg className="hehe" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="pathTwo" fillRule="evenodd" clipRule="evenodd" d="M0 0H1000V1000H0V0Z M469.932 195.841C555.056 201.38 636.015 225.622 695.565 286.7C764.492 357.395 833.654 448.405 809.522 544.146C785.698 638.663 675.341 668.553 588.273 712.373C497.99 757.811 400.144 844.036 312.028 794.527C225.017 745.637 262.625 616.287 243.074 518.415C224.764 426.75 150.427 331.183 204.2 254.722C259.11 176.645 374.681 189.642 469.932 195.841Z" fill="black"/>
                        </svg>
                        <Image
                            src={nnnaaabbbb}
                            alt="asd"
                            className="imaege"
                        />
                    </div>
                    <p className="text-center font-thin text-4xl">CO</p>
                    <p className="text-center font-thin text-xl">Carbon Oxides</p>
                    {/* <p className="hidden md:block text-center font-thin text-sm break-words">
                    Major sources include motor vehicles, industrial plants, and residential heating.
                    CO is a toxic gas that interferes with oxygen delivery in the body, potentially causing symptoms
                     like headaches, dizziness, or even death at high exposure levels. CO₂, while non-toxic at typical
                      concentrations, is a major greenhouse gas contributing to global warming. Elevated CO₂ levels in
                       poorly ventilated spaces can also lead to reduced cognitive function and drowsiness.
                    </p> */}
                </div>
                <div>
                    <div className="cont">
                        <svg className="hehe" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="pathThree" fillRule="evenodd" clipRule="evenodd" d="M0 0H1000V1000H0V0Z M484.334 186.367C565.612 191.676 611.191 271.097 665.214 332.055C725.586 400.177 816.939 459.404 806.439 549.82C795.252 646.161 702.726 706.353 616.577 750.907C526.316 797.588 421.503 840.965 330.357 796.038C239.816 751.408 206.052 642.796 193.943 542.582C183.485 456.039 216.1 373.884 271.181 306.318C325.379 239.834 398.74 180.777 484.334 186.367Z" fill="black"/>
                        </svg>
                        <Image
                            src={nnn}
                            alt="asd"
                            className="imaege"
                        />
                    </div>
                    <p className="text-center font-thin text-4xl">SO</p>
                    <p className="text-center font-thin text-xl">Sulfur Oxides</p>
                    {/* <p className="hidden md:block text-center font-thin text-sm break-words">
                    Power plants, industrial processes, and vehicles burning sulfur-rich fuels are major sources of SO₂
                     emissions. Once in the atmosphere, SO₂ reacts with water vapor to form sulfuric acid, contributing
                      to acid rain, which damages ecosystems, buildings, and water bodies. SO₂ is a respiratory irritant
                       and can exacerbate asthma and bronchitis, leading to reduced lung function and increased
                        hospitalizations for respiratory diseases. Long-term exposure may also impair cardiovascular health.
                    </p> */}
                </div>
            </div>
            <div className="w-full flex justify-center">
            <motion.button
                className="bw-button text-justify font-thin text-sm md:text-xl mt-[5%]" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <a href="/run"><p className="text-black text-center">
                know air pollutants in your area
                </p></a>
            </motion.button>
            </div>
        </div>
    );
}
