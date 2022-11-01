import { useEffect, useState } from "react";
import { fetchArticleById } from "../api";
import { useParams } from "react-router-dom";

const Article = () => {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams(); 

    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(article_id).then((article) => {
            setArticle(article);
            setIsLoading(false);
        })
    }, [article_id])

    if (isLoading) return <h2 className="loading">LOADING</h2>
    else return (
        <article className="article">
            <div className="article-header">
                <h2>{article.title}</h2>
                <p>{article.topic}</p>
            </div>
            <div className="article-body">
                <p>{article.body}</p>
            </div>
            <div className="article-footer">
                <p>{article.author}</p>
                <p>{article.created_at.slice(0, 10)}</p>
            </div>
        </article>
    )
}

export default Article;