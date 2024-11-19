import Spleen from "@/components/parallax";
import MotionButton from "@/components/motionButton";
import Blob from "@/components/blobls.jsx"
import Gigan from "@/components/gigan";
import White from "@/components/whit"
import WhiteAfter from "@/components/whitafter"


export default function Home() {
  return (
    <main>
        <div className="spline-container" >
          <Spleen />
          <MotionButton />
          <div
            className="bg-black fixed bottom-0 right-0 w-[25vw] h-[5vh] mr-4 mb-4 flex items-center justify-center p-2"
          >
            <p className="text-white text-xs font-bold break-words">
              Abduction of Europa, 1727 by Noël-Nicolas Coypel</p>
          </div>
        </div>
      <Blob/>
      <Gigan />
      <White />
      <WhiteAfter />
    </main>
  );
}
