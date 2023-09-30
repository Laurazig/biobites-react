
import { NavLink } from "react-router-dom";

export default function DesktopNav(props) {

    return (
        <div className="desktopNav">
            <div className="linkWrapper">
                <NavLink to="/meals" style={({ isActive }) => ({
                    textDecoration: isActive && "underline"
                })}> Meals</NavLink>

                <NavLink to="/cart" style={({ isActive }) => ({
                    textDecoration: isActive && "underline"
                })}> Cart</NavLink>
            </div>
        </div>
    );
}