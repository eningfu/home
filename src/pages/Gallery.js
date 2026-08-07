import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import gd from "../assets/gallery-gd.png";
import tf from "../assets/typeface.png";
import mg from "../assets/nalina.gif";
import nm from "../assets/nosmax.gif";
import pm from "../assets/pxmail.png";
import beat from "../assets/beat.gif";
import login from "../assets/log in.gif";

function Gallery() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container-gallery">
          <div className="left">
            <figure>
              <img src={login} alt="Character signing in onto webpage" />
              <figcaption>POV Computer Interaction Scene [Created with Premiere Pro] (2026)</figcaption>
            </figure>

            <figure>
              <img src={beat} alt="Motion graphics" />
              <figcaption>Beat-Synced Motion Graphic Background [Created with Premiere Pro] (2026)</figcaption>
            </figure>

            <figure>
              <img src={mg} alt="Motion graphics" />
              <figcaption>Beat-Synced Motion Graphic Background [Created with Premiere Pro] (2025)</figcaption>
            </figure>

            <figure>
              <img src={nm} alt="GIF of character holding up bottle" />
              <figcaption>Squigglevision Character Animation (2023)</figcaption>
            </figure>            
          </div>
          <div className="middle">
            <figure>
              <img src={gd} alt="Posters" />
              <figcaption>Simple poster designs (2023)</figcaption>
            </figure>
          </div>
          <div className="right">
            <figure>
              <img src={tf} alt="Typeface" />
              <figcaption>3x4 Pixel Typeface (2026)</figcaption>
            </figure>

            <figure>
              <img src={pm} alt="Pixel art envelope" />
              <figcaption>Pixel Art Assets (2025)</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;