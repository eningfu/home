import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import gd from "../assets/gallery-gd.png";
import mg from "../assets/nalina.mp4";

function Gallery() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="gallery">
          <img src={gd} alt="Posters" width="40%" />
          <video width="100%" controls>
            <source src={mg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;