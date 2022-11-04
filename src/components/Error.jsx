import { Link } from "react-router-dom";

const Error = ({ errorMessage }) => {
    return (
    <div className="error">
        <h2 >{errorMessage}</h2>
        <button>
            <Link to="/">GO TO ALL ARTICLES</Link>
        </button>
    </div>
    )
}

export default Error;