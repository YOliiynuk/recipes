import "./style.css";



const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container_nav">
                <div className="nav_row">
                    <a href="#" className="logo">Recipe</a>
                    <ul className="nav-list">
                        <li className="nav-list-item">HOME</li>
                        <li className="nav-list-item">LIST</li>
                        <li className="nav-list-item">SEARCH</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar