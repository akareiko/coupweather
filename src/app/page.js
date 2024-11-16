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
        </div>
      <Blob/>
      <Gigan />
      <White />
      <WhiteAfter />
    </main>
  );
}
