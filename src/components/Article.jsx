import { useEffect, useState } from "react";
import { fetchArticleById, fetchCommentsById } from "../api";
import { useParams } from "react-router-dom";
import Votes from "./Votes";
import Comments from "./Comments";

const Article = () => {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes] = useState();
    const [comments, setComments] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(article_id).then((article) => {
            setArticle(article);
            setVotes(article.votes);
            setIsLoading(false);
        })
    }, [article_id])

    useEffect(() => {
        setIsLoading(true);
        fetchCommentsById(article_id).then((comments) => {
            setComments(comments);
            setIsLoading(false);
        })
    }, [])

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

            <div className="comments-container">
            <h2>Comments</h2>
                {comments.map(({author, body, created_at, votes, comment_id}) => {
                    return <Comments
                        key={comment_id}
                        author={author}
                        body={body}
                        created_at={created_at}
                        votes={votes}
                        />
                })}
            </div>
        </article>
    )
}

export default Article;