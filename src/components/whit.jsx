'use client';
import Image from "next/image"
import tt from "../../public/tt.jpg"
import { motion, useScroll, useTransform  } from "motion/react"

export default function White() {
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [1800, 3500], [-100, 50]);

    return(
        <div className="relative bg-white h-screen mt-40">
            <motion.div
                style={{
                    y: yOffset,
                }}
            >
                <div className="flex flex-row min-h-width justify-center pl-20 -z-10">
                    <Image
                        src={tt}
                        alt="asd"
                        className="mt-20"
                        style={{
                            width: "40vh",
                            height: "40vh",
                            objectFit: "fill",
                            borderRadius: "15px",
                        }}
                    />
                </div>
            </motion.div>
            <div className="absolute top-0 left-0 p-10 text-black text-8xl max-w-[100%] break-words mt-40 z-10">
                    <p>BREATHING DATA,</p>
                    <p>A CLEAR VISION,</p>
                    <p>OF CLEAN AIR.</p>
            </div>
            <div className="absolute top-0 right-0 p-2 text-black rotate-90 mt-40 z-10">
                <p>kussainov iskendir</p>
            </div>
            <div className="absolute right-0 p-4 text-black max-w-[50%] break-words mt-20 z-10">
                <p>Clean air is essential for maintaining good respiratory and cardiovascular health, 
                    reducing the risk of diseases like asthma and heart conditions. It reduces healthcare costs associated
                     with treating pollution-related illnesses. It supports the growth of plants and crops, which are vital
                      for food production and sustaining ecosystems. Preserving clean air helps combat climate change by
                       minimizing the presence of harmful pollutants like carbon dioxide and methane. Clean air contributes 
                       to clearer visibility, improving safety in transportation and enhancing natural beauty. And finally, it
                        fosters economic growth by creating a healthier workforce and attracting eco-conscious businesses.</p>
            </div>
            <div className="absolute bottom-0 left-0 p-2 text-black rotate-90 z-10 mb-40">
                <p>skibidi alpha rizz project</p>
            </div>
        </div>
    )
}
