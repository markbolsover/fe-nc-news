import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUser';


const UserCard = ({avatar_url, name, username}) => {
    const { setCurrentUser } = useContext(CurrentUserContext);

    const toggleUser = () => {
        setCurrentUser(`${username}`);
    }
    
    return (
        <Link onClick={toggleUser} to="/" className="user-card">
            <img src={avatar_url} alt={username} className="user-image"/>
            <h2>{name}</h2>
        </Link>
    )
}

export default UserCard;