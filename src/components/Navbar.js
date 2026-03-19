import NavbarButton from "./NavbarButton";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const current = location.pathname.replace("/", "") || "home";

  return (
    <div className="navbar">
      <NavbarButton buttonDest={"home"} active={current === "home"}/>
      <NavbarButton buttonDest={"about"} active={current === "about"}/>
      <NavbarButton buttonDest={"projects"} active={current === "projects"}/>
    </div>
  );
}

export default Navbar;


