import Image from "next/image";
import j from "/Users/legato/Documents/GitHub/coupte/public/j.png"
import Grid from "@/components/grid"

export default function Home() {
  return (
    <main>
        <div className="relative">
            <div className="absolute -z-10">
                <Image
                    src={j}
                    alt="asd"
                    style={{
                        width: "100vw",
                        height: "100vh",
                        objectFit: "fill",
                        borderRadius: "15px",
                    }}
                />
            </div>
            <div className="absolute flex min-w-full justify-center z-10">
                <Grid />
            </div>
        </div>
    </main>
  );
}
