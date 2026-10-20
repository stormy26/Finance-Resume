import { NavLink } from "react-router-dom";

function Navbar() {

    return(
        <>
        <section id="navbar">
            <nav id="nav-links">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/experience" className="nav-link">Experience</NavLink>
                <NavLink to="/activities" className="nav-link">Activities</NavLink>
            </nav>
        </section>
        </>

    )
}

export default Navbar