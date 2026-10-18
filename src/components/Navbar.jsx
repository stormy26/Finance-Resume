import { NavLink } from "react-router-dom";

function Navbar() {

    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/activities">Activities</NavLink>
        </nav>
    )
}

export default Navbar