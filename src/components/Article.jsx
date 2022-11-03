import { useEffect, useState } from "react";
import { fetchArticleById } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Votes from "./Votes";
import Comments from "./Comments";

const Article = () => {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes] = useState();
    const [err, setErr] = useState(null);
    const {article_id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(article_id).then((article) => {
            setArticle(article);
            setVotes(article.votes);
            setIsLoading(false);
        }).catch((err) => {
            setErr(err.response.data.msg);
        })
    }, [article_id])

    if (err) return (
        <div className="error">
            <h2>{err}</h2>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
    if (isLoading) return <h2 className="loading">LOADING</h2>
    else return (
        <article className="article">
            <div className="article-header">
                <h2>{article.title}</h2>
                <div className="article-header-bottom-row">
                    <p>{article.topic}</p>
                    <Votes votes={votes} id={article.article_id}/>
                </div>
            </div>
            <div className="article-body">
                <p>{article.body}</p>
            </div>
            <div className="article-footer">
                <p>{article.author}</p>
                <p>{article.created_at.slice(0, 10)}</p>
            </div>
            <Comments article_id={article_id}/>
        </article>
    )
}

export default Article;