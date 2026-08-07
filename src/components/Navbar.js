import NavbarButton from "./NavbarButton";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const current = location.pathname.split("/").filter(Boolean).pop() || "home";

  return (
    <div className="navbar">
      <NavbarButton buttonDest={"home"} label="home" active={current === "home"}/>
      <NavbarButton buttonDest={"about"} label="about me" active={current === "about"}/>
      <NavbarButton buttonDest={"projects"} label="web projects" active={current === "projects"}/>
      <NavbarButton buttonDest={"gallery"} label="art/video" active={current === "gallery"}/>
    </div>
  );
}

export default Navbar;


