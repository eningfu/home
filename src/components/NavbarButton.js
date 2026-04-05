import { useNavigate } from "react-router-dom";

function NavbarButton({ buttonName, buttonDest, active }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${buttonDest}`);
  };

  return (
    <button className={active ? "navbar-btn active" : "navbar-btn"} onClick={handleClick}>{buttonName}</button>
  );
}

export default NavbarButton;


