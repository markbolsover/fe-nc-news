const ArticleCard = ({ author, title, topic }) => {
    return (
        <article className="article-card">
            <div className="top-row">
                <h3>{title}</h3>
            </div>
            <div className="bottom-row">
                <p>Authored by: {author}</p>
                <p>{topic}</p>
            </div>
        </article>
    )
}

export default ArticleCard;