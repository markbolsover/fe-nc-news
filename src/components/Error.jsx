import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
    <div className="error">
        <h2 >The page you were looking for does not exist</h2>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
    )
}

export default Error;