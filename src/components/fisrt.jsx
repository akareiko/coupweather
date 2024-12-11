import Spline from '@splinetool/react-spline/next';
import MotionButton from "@/components/motionButton";

export default function First() {
    return(
        <div className="spline-container" >
          <Spline scene="https://prod.spline.design/w59ORhOjK1yp2PvE/scene.splinecode"/>
          <MotionButton />
        </div>
    );
}