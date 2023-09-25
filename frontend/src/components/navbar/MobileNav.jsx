import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function MobileNav(props) {
    const [hideSidemenu, setHideSideMenu] = useState(true);

    // SHOW HIDE BURGER MENU -----> function to set the opposite state to show or hide the burger menu

    const handleClickBurger = (event) => {
        setHideSideMenu((current) => !current);
    };
    return (
        <div className="navBar">
            <h1>Biobites</h1>
            <MenuIcon
                onClick={handleClickBurger}
                className={hideSidemenu === false ? "hide" : "menuIcon"}
                style={{ fontSize: 35 }}
            />

            {/* Green area with content */}
            <div className={hideSidemenu === true ? "hide" : "sectionWrapper"}>
                <CloseIcon
                    onClick={handleClickBurger}
                    className={hideSidemenu === false ? "closeIcon" : "hide"}
                />

                <div className="linkWrapper">
                    <NavLink to="/" onClick={handleClickBurger}>
                        Home
                    </NavLink>

                    {/* <NavLink to="howitworks" onClick={handleClickBurger}>
                        How it works
                    </NavLink> */}

                    <NavLink to="/meals" onClick={handleClickBurger}>
                        {" "}
                        Meals
                    </NavLink>
                    {/* <NavLink to="/sustainability" onClick={handleClickBurger}>
                        Sustainability
                    </NavLink> */}

                    <NavLink
                        className={props.isLoggedIn === false ? "hide" : "cartPage"}
                        to="/cart"
                        onClick={handleClickBurger}
                    >
                        Cart
                    </NavLink>
                </div>
            </div>
        </div>
    )
}