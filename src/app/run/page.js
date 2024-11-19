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
            </div>
            <div className="absolute flex min-w-full justify-center z-10">
                <Grid />
            </div>
        </div>
    </main>
  );
}
