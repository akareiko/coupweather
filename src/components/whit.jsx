'use client';
import Image from "next/image"
import tt from "../../public/tt.jpg"
import { motion, useScroll, useTransform  } from "motion/react"

export default function White() {
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [1800, 3200], [-100, 100]);

    return(
        <div className="relative bg-white h-screen">
            <motion.div
                style={{
                    y: yOffset,
                }}
            >
                <div className="flex flex-row min-h-width justify-center pl-20 -z-10">
                    <Image
                        src={tt}
                        alt="asd"
                        className="mt-40"
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
                    <p>BREATHING DATA:</p>
                    <p>A CLEAR VISION</p>
                    <p>OF CLEAN AIR</p>
            </div>
            <div className="absolute top-0 right-0 p-2 text-black rotate-90 mt-40 z-10">
                <p>lorem ipsum</p>
            </div>
            <div className="absolute right-0 p-2 text-black max-w-[50%] break-words mt-20 z-10">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit nisl vitae sem laoreet scelerisque. Maecenas sed blandit ipsum, vel dapibus arcu. Vestibulum volutpat justo et urna molestie tempus. Pellentesque hendrerit posuere vehicula. In hac habitasse platea dictumst. Aliquam lacinia nulla elit, non mollis eros feugiat a. Nulla ipsum velit, condimentum quis urna sit amet, suscipit ullamcorper odio. Suspendisse rhoncus egestas ligula, ac semper metus interdum eu.</p>
            </div>
            <div className="absolute bottom-0 left-0 p-2 text-black rotate-90 z-10 mb-40">
                <p>lorem ipsum</p>
            </div>
        </div>
    )
}
