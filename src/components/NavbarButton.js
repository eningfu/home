import { useNavigate } from "react-router-dom";

function NavbarButton({ buttonDest, label, active }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${buttonDest}`);
  };

  return (
    <button className={active ? "navbar-btn active" : "navbar-btn"} onClick={handleClick}>{label}</button>
  );
}

export default NavbarButton;


