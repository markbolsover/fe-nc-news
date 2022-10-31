import { Link } from "react-router-dom";

const Nav = () => {
    return (
    <nav className="nav">
        <Link to="/" className="link">HOME</Link>
        <h3 className="link">TOPICS</h3>
        <h3 className="link">SORT</h3>
    </nav>
    )
}

export default Nav;