import tt from "../../public/venus.jpg"
import Image from "next/image"

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
                        <div className="absolute right-5 top-10 z-10 p-4 text-white max-w-[60%] break-words font-bold">
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit nisl vitae sem laoreet scelerisque. Maecenas sed blandit ipsum, vel dapibus arcu. Vestibulum volutpat justo et urna molestie tempus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}