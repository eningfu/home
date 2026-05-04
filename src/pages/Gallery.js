import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import gd from "../assets/gallery-gd.png";
import tf from "../assets/typeface.png";

function Gallery() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container-gallery">
          <img src={gd} alt="Posters" width="40%" />
          <img src={tf} alt="Typeface" width="60%" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;