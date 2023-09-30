import { NavLink } from "react-router-dom";
import DesktopNav from "./DesktopNav";
// import MobileNav from "./MobileNav";
import "./Navigation.scss"

export default function Navigation(props) {

    // useEffect(() =>{

    // }, []);

    // UseEffect(() =>{

    // }, []);

    return(
        <div className="navBar">
            <NavLink to="/">
                <span className="nav-log">
                    <div className="logoImg"></div>
                    <h1>Biobites</h1>
                </span>
            </NavLink>
            {/* <MobileNav /> */}
            <DesktopNav />
        </div>
    )

}