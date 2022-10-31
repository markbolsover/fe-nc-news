import { Link } from "react-router-dom";

const ArticleCard = ({ author, title, article_id, topic }) => {
    return (
        <Link to={`/articles/${article_id}`}>
            <article className="article-card">
                <div className="top-row">
                    <h3>{title}</h3>
                </div>
                <div className="bottom-row">
                    <p>Authored by {author}</p>
                    <p>{topic}</p>
                </div>
            </article>
        </Link>
    )
}

export default ArticleCard;