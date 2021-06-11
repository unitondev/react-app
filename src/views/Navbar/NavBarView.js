import { NavLink } from "react-router-dom";

function NavBarView(props) {
    return (
        <nav>
            <ul className="navbar-links container">
                <li className="navbar-link-block">
                    <NavLink
                        to="/about"
                        className="navbar-link"
                        activeClassName="activeLink"
                    >
                        About Us
                    </NavLink>
                </li>

                <li className="navbar-link-block">
                    <NavLink
                        to="/counters"
                        className="navbar-link"
                        activeClassName="activeLink"
                    >
                        Counters
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBarView;
