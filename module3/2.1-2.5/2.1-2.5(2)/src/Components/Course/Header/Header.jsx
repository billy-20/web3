
import logo from "../Header/logo_vinci.png"

const Header = ({ course }) => {
  return (
    <div>
      <img src={logo} alt="logo Vinci"></img>
      <h1>{course}</h1>
    </div>
  );
};

export default Header;
