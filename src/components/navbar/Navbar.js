import "./style.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {



    return (
        <nav className="nav">
            <div className="container_nav">
                <div className="nav_row">

                    <NavLink to="/" className="logo">
                        <h2>Recipe</h2>
                    </NavLink>
                    <ul className="nav-list">

                        <li>
                            <NavLink  to="/" className="nav-list-item">
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/list' className="nav-list-item">
                                LIST
                            </NavLink>
                        </li>
                        <li className="nav-list-item">SEARCH</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar