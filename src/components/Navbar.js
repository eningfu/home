import NavbarButton from "./NavbarButton";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const current = location.pathname.split("/").filter(Boolean).pop() || "home";

  return (
    <div className="navbar">
      <NavbarButton buttonName={"home"} buttonDest={""} active={current === "home"}/>
      <NavbarButton buttonName={"about"} buttonDest={"about"} active={current === "about"}/>
      <NavbarButton buttonName={"projects"} buttonDest={"projects"} active={current === "projects"}/>
      <NavbarButton buttonName={"gallery"} buttonDest={"gallery"} active={current === "gallery"}/>
    </div>
  );
}

export default Navbar;


