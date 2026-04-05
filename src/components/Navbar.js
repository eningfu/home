import NavbarButton from "./NavbarButton";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const current = location.pathname.split("/").filter(Boolean).pop() || "home";

  return (
    <div className="navbar">
      <NavbarButton buttonDest={"home"} active={current === "home"}/>
      <NavbarButton buttonDest={"about"} active={current === "about"}/>
      <NavbarButton buttonDest={"projects"} active={current === "projects"}/>
      <NavbarButton buttonDest={"gallery"} active={current === "gallery"}/>
    </div>
  );
}

export default Navbar;


