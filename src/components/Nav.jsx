import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopics } from "../api";

const Nav = () => {
    const [topics, setTopics] = useState([]);
  
    useEffect(() => {
      fetchTopics().then((topics) => {
        setTopics(topics);
      });
    }, [topics]);

    return (
    <nav className="nav">
        <Link to="/" className="link">HOME</Link>
        <div className="dropdown">
            <button className="dropdown-button">TOPICS</button>
            <div className="dropdown-content">
                {topics.map(({slug}) => {
                        return (
                            <Link key={slug} to={`/topics/${slug}`}>{slug}</Link>
                        )
                    })}
            </div>
        </div>
        <h3 className="link">SORT</h3>
    </nav>
    )
}

export default Nav;