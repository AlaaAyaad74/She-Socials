import Blog from "../../ui/blog/Blog";
import CameraRoll from "../../ui/cameraroll/CameraRoll";

import Hero from "../../ui/herosection/Hero";
import Inque from "../../ui/inQueue/Inque";
import LoveNotes from "../../ui/love/LoveNotes";

function HomePage() {
  return (
    <div>
      <Hero />
      <Blog />
      <Inque />
      <LoveNotes />
      <CameraRoll />
    </div>
  );
}

export default HomePage;
