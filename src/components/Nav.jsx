import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUser';

const Nav = () => {
    const [topics, setTopics] = useState([]);
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    const toggleUser = () => {
        setCurrentUser(null);
    }
  
    useEffect(() => {
      fetchTopics().then((topics) => {
        setTopics(topics);
      });
    }, []);

    if (currentUser) return (
        <nav className="nav">
        <Link to="/" className="link">HOME</Link>
        <div className="dropdown">
            <button className="dropdown-button">TOPICS</button>
            <div className="dropdown-content">
                {topics.map(({slug}) => {
                        return (
                            <Link key={slug} to={`/articles/topics/${slug}`}>{slug}</Link>
                        )
                    })}
            </div>
        </div>
        <div className="nav-user">
            <h3 className="nav-item">SIGNED IN AS - {currentUser}</h3>
            <button onClick={toggleUser} className="user-button">SIGN OUT</button>
        </div>
    </nav>
    ) 
    else return (
    <nav className="nav">
        <Link to="/" className="link">HOME</Link>
        <div className="dropdown">
            <button className="dropdown-button">TOPICS</button>
            <div className="dropdown-content">
                {topics.map(({slug}) => {
                        return (
                            <Link key={slug} to={`/articles/topics/${slug}`}>{slug}</Link>
                        )
                    })}
            </div>
        </div>
        <Link to="/sign-in" className="link">SIGN IN</Link>
    </nav>
    )
}

export default Nav;