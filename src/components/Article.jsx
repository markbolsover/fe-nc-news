import { useEffect, useState } from "react";
import { fetchArticleById } from "../api";
import { useParams } from "react-router-dom";
import Votes from "./Votes";
import Comments from "./Comments";
import Error from "./Error";

const Article = () => {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes] = useState();
    const [err, setErr] = useState(null);
    const {article_id} = useParams();

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

    if (err) return <Error errorMessage={err}/>
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