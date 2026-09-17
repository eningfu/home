import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import avatar from "../assets/avatar.png";
import htmlLogo from "../assets/logo-html.png";
import cssLogo from "../assets/logo-css.png";
import jsLogo from "../assets/logo-js.png";
import tsLogo from "../assets/logo-ts.png";
import reactLogo from "../assets/logo-react.png";
import nodeLogo from "../assets/logo-node.png";
import gitLogo from "../assets/logo-git.png";
import pythonLogo from "../assets/logo-python.png";
import bashLogo from "../assets/logo-bash.png";
import vsLogo from "../assets/logo-vs.png";
import adobeLogo from "../assets/logo-adobe.png";
import figmaLogo from "../assets/logo-figma.png";
import blenderLogo from "../assets/logo-blender.png";
import unrealLogo from "../assets/logo-unreal.png";
import aspLogo from "../assets/logo-asperite.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="hello-image">
            <img className="profile-photo" src={avatar} alt="Profile Doodle" width="80%" />
          </div>
          <div className="hello-text"> 
            <h1 className="welcome">Hello!</h1>
            <h2 className="intro">My name is <i>Emily Ning</i>.</h2>
            <p className="short-abt">
              Welcome to my portfolio website! I like making things with
              <span className="highlight"> <a href="/projects">code</a> </span> +
              <span className="highlight"> <a href="/gallery">art</a></span>.
            </p>
            <div className="marquee-cont">
              <div className="marquee-track">
                <div className="marquee-group">
                  <span>web dev • design • illustration • animation • video editing • </span>
                </div>
                <div className="marquee-group">
                  <span>web dev • design • illustration • animation • video editing • </span>
                </div>
                <div className="marquee-group">
                  <span>web dev • design • illustration • animation • video editing • </span>
                </div>
              </div>
            </div>
            <div>
              <hr />
              <div className="icons">
                <p>Get in touch:</p>
                <a href="https://www.linkedin.com/in/emilyning/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/eningfu">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:eningfu@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="list">
          <div className="group">
            <h1>Languages</h1>
            <div className="svg-row">
              <img src={htmlLogo} alt="HTML" />
              <img src={cssLogo} alt="CSS" />
              <img src={jsLogo} alt="JavaScript" />
              <img src={tsLogo} alt="TypeScript" />
              <img src={reactLogo} alt="React" />
              <img src={nodeLogo} alt="Node JS" />
              <img src={gitLogo} alt="Git" />
              <img src={pythonLogo} alt="Python" />
              <img src={bashLogo} alt="Bash" />
            </div>
          </div>
          <div className="group">
            <h1>Software</h1>
            <div className="svg-row">
              <img src={vsLogo} alt="VS Code" />
              <img src={adobeLogo} alt="Adobe Creative Suite" />
              <img src={figmaLogo} alt="Figma" />
              <img src={blenderLogo} alt="Blender" />
              <img src={unrealLogo} alt="Unreal Engine" />
              <img src={aspLogo} alt="Asperite" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

