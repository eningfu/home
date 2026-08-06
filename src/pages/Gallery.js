import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import gd from "../assets/gallery-gd.png";
import tf from "../assets/typeface.png";
import mg from "../assets/nalina-blockb.mp4";

function Gallery() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container-gallery">
            <figure>
              <img src={gd} alt="Posters" />
              <figcaption>Simple poster designs</figcaption>
            </figure>

            <figure>
              <img src={tf} alt="Typeface" />
              <figcaption>3x4 Pixel Typeface</figcaption>
            </figure>

            <figure>
              <video src={mg} controls />
              <figcaption>Motion Graphic Background (Premiere Pro)</figcaption>
            </figure>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;