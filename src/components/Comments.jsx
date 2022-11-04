import { useEffect, useState } from "react";
import { fetchCommentsById } from "../api";
import AddComment from "./AddComment";
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUser';

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        setIsLoading(true);
        fetchCommentsById(article_id).then((comments) => {
            setComments(comments);
            setIsLoading(false);
        })
    }, [article_id])

    if (!currentUser) return (
        <section className="comments-container">
        <h2>Comments</h2>
        <h2 className="please-sign-in">PLEASE SIGN IN TO POST A COMMENT</h2>
        {comments.map(({author, body, created_at, votes, comment_id}) => {
            return (
                <div className="comment-card" key={comment_id}>
                    <div className="comment-header">
                        <h4>{author}</h4>
                        <p>{created_at.slice(0, 10)}</p>
                    </div>
                    <p className="comment-body">{body}</p>
                    <div className="comment-footer">
                        <p>Votes {votes}</p>
                    </div>
                </div>
            )
        })}
    </section>
    )
    if (isLoading) return <h2 className="loading">LOADING</h2>
    else return (
        <section className="comments-container">
            <h2>Comments</h2>
            <AddComment article_id={article_id} setComments={setComments}/>
            {comments.map(({author, body, created_at, votes, comment_id}) => {
                return (
                    <div className="comment-card" key={comment_id}>
                        <div className="comment-header">
                            <h4>{author}</h4>
                            <p>{created_at.slice(0, 10)}</p>
                        </div>
                        <p className="comment-body">{body}</p>
                        <div className="comment-footer">
                            <p>Votes {votes}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Comments;