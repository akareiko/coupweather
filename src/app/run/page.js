import Grid from "@/components/grid"
import Spline from '@splinetool/react-spline/next';


export default function Home() {
  return (
    <main>
        <div className="relative">
            <div className="absolute -z-10 spline-container">
                {/* <Image
                    src={j}
                    alt="asd"
                    style={{
                        width: "100vw",
                        height: "100vh",
                        objectFit: "fill",
                        borderRadius: "15px",
                    }}
                /> */}
                <Spline
                    scene="https://prod.spline.design/2vgCtgDxj3AH21Bg/scene.splinecode" 
                />
                <div
                    className="bg-black fixed bottom-0 right-0 w-[25vw] h-[5vh] mr-4 mb-4 flex items-center justify-center p-2"
                >
                    <p 
                        className="text-white text-xs font-bold break-words"
                    >
                        Earth spinnin model
                    </p>
                </div>
            </div>
            <div className="absolute flex min-w-full justify-center z-10">
                <Grid />
            </div>
        </div>
    </main>
  );
}
