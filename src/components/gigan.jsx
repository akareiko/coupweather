import tt from "../../public/venus.jpg"
import Image from "next/image"
import ss from "../../public/sevege.svg"

export default function Gigan() {
    return(
        <div className="mt-40">
            <div className="flex flex-row min-w-width justify-center">
                <div className="relative">
                    <Image
                        src={tt}
                        alt="asd"
                        className="w-50"
                        style={{ 
                            height: '150vh',
                            objectFit: 'fill',
                            borderRadius: '15px'
                        }}
                    />
                    <div>
                        <div className="absolute left-5 top-10 z-10 p-4 text-white font-bold">
                            <p>web project</p>
                        </div>
                        <div className="absolute right-5 top-10 z-10 p-4 text-white max-w-[40%] break-words font-bold">
                            <p>the project features a glassmorphic dashboard with charts to track weather trends and real-time data via geolocation.
                            </p>
                        </div>
                        <div className="absolute z-10 flex min-w-full justify-center bottom-[-180px]">
                            <Image
                                className="w-[90vw] h-[140vh]"
                                src={ss}
                                alt="asd"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}