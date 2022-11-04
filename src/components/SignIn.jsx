import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import UserCard from "./UserCard";

const SignIn = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then((users) => {
            setUsers(users);
        })
    }, [])

    return (
        <div>
            <h2 className="articles-header">PLEASE SELECT A USER TO SIGN IN</h2>
            <div className="users-container">
            {users.map(({avatar_url, name, username}) => {
                return <UserCard 
                    key={username} 
                    avatar_url={avatar_url} 
                    name={name}
                    username={username}
                    />
            })}
            </div>
        </div>
    )
}

export default SignIn;