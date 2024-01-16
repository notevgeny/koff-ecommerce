import { Link } from "react-router-dom";
import logo from "/src/assets/logo.svg";

export const Logo = (props) => (
  <>
    <Link to="/" className={props.className}>
      <img src={logo} alt="logo" />
    </Link>
  </>
);
