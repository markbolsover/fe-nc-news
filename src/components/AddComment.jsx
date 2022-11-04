import { useState, useContext } from "react";
import { addComment, fetchCommentsById } from "../api";
import { CurrentUserContext } from '../contexts/CurrentUser';

const AddComment = ({article_id, setComments}) => {
    const [commentBody, setCommentBody] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [commentSubmitted, setCommentSubmitted] = useState(false);
    const [err, setErr] = useState(null);
    const { currentUser } = useContext(CurrentUserContext);

    const handleCommentInput = (event) => {
        const newComment = event.target.value;
        const element = document.getElementById("comment-input-error");
        element.classList.remove("comment-input-error-show");
        setCommentBody(newComment);
    };

    const submitComment = (event) => {
        if (commentBody.length === 0) {
            event.preventDefault();
            const element = document.getElementById("comment-input-error");
            element.classList.add("comment-input-error-show");
            element.innerText = "Please enter your comment";
        } else {
                setIsLoading(true)
                addComment(article_id, currentUser, commentBody).then(() => {
                    setCommentBody("");
                    setIsLoading(false);
                    setCommentSubmitted(true)
                    fetchCommentsById(article_id).then((comments) => {
                        setComments(comments);
                        setIsLoading(false);
                    })
                }).catch(() => {
                    setErr("something went wrong, please try again")
                    setTimeout(setErr(null), 5000);
                });
        };
    };

    if (err) return <p className="comment-error">{err}</p>;
    if (isLoading) return <h2 className="comment-loading">Please wait</h2>
    if (commentSubmitted) return <h2 className="comment-submitted">Comment Submitted!</h2>
    else return (
        <form className="add-comment" onSubmit={submitComment}>
            <h4 className="add-comment-text">Add a new comment</h4>
            <p id="comment-input-error" className='comment-input-error'></p>
            <input className="comment-input" placeholder="Please enter your comment" onChange={handleCommentInput}></input>
            <button type="submit" className="comment-submit-button">Submit</button>
        </form>
    )
}

export default AddComment;