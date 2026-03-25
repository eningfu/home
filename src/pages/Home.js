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

const textstyle = {
  color: "#ff2bbf",
}

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="hello-image">
          <img class="profile-photo" src={avatar} alt="Profile Doodle" width="80%" />
        </div>
        <div class="hello-text"> 
          <h1>Hello! I'm Em 🫧</h1>
          <h2>
            <span style={textstyle}>student </span>| 
            <span style={textstyle}> coder </span> | 
            <span style={textstyle}> artist </span>
          </h2>
          <p>
            3rd year student @ UNSW majoring in Computer Science with a strong interest in UI/UX and front-end development. 
            <br /><br />
            I also have fun with graphic design and video editing ☆
          </p>
          <div class="icons">
            <hr />
            <a href="https://www.linkedin.com/in/emilyning/" class="fab fa-linkedin"></a>
            <a href="https://github.com/eningfu" class="fab fa-github"></a>
            <a href="mailto:eningfu@gmail.com" class="fa fa-envelope"></a>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="group">
          <h1>Languages</h1>
          <div class="svg-row">
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
        <div class="group">
          <h1>Software</h1>
          <div class="svg-row">
            <img src={vsLogo} alt="VS Code" />
            <img src={adobeLogo} alt="Adobe Creative Suite" />
            <img src={figmaLogo} alt="Figma" />
            <img src={blenderLogo} alt="Blender" />
            <img src={unrealLogo} alt="Unreal Engine" />
            <img src={aspLogo} alt="Asperite" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

