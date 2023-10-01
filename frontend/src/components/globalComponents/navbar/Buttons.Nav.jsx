import { NavLink } from "react-router-dom";
import './styleDesktop.scss';

export default function ButtonsNav(props) {
  return (
    <div buttonWrapper>   
    <NavLink to="/login">
      <button className={props.isLogged === true ? "hide" : "logInButton"}>
        Login
      </button>
    </NavLink>
    <NavLink to="/register">
      <button className={props.isLogged === true ? "hide" : "regButton"}>
        {" "}
        Register
      </button>
    </NavLink>
  </div>
  )
}
