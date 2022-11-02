import { useState } from "react";
import { addComment } from "../api";

const AddComment = ({article_id}) => {
    const [commentBody, setCommentBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [commentSubmitted, setCommentSubmitted] = useState(false);
    const [err, setErr] = useState(null);

    const handleCommentInput = (event) => {
        const newComment = event.target.value;
        const element = document.getElementById("comment-input-error");
        element.classList.remove("comment-input-error-show");
        setCommentBody(newComment);
    };

    const handleAuthorInput = (event) => {
        const newAuthor = event.target.value;
        const element = document.getElementById("author-input-error");
        element.classList.remove("author-input-error-show");
        setAuthor(newAuthor);
    };

    const pageRefresh = () => {
        window.location.reload(true);
    };

    const submitComment = (event) => {
        if (commentBody.length === 0) {
            event.preventDefault();
            const element = document.getElementById("comment-input-error");
            element.classList.add("comment-input-error-show");
            element.innerText = "Please enter your comment";
        }
        if (author.length === 0) {
            event.preventDefault();
            const element = document.getElementById("author-input-error");
            element.classList.add("author-input-error-show");
            element.innerText = "Please enter your name";
        }
        else {
        setIsLoading(true)
            addComment(article_id, author, commentBody).then(() => {
                setCommentBody("");
                setAuthor("");
                setIsLoading(false);
                setCommentSubmitted(true)
                setTimeout(pageRefresh, 2000)
            }).catch(() => {
                setErr("something went wrong, please try again")
                setTimeout(pageRefresh, 2000);
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
            <p id="author-input-error" className='author-input-error'></p>
            <input className="author-input" placeholder="Please enter your name"onChange={handleAuthorInput}></input>
            <button type="submit" className="comment-submit-button">Submit</button>
        </form>
    )
}

export default AddComment;