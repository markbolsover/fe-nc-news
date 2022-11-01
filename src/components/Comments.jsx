const Comments = ({author, body, created_at, votes}) => {
    return (
        <section className="comment-card">
            <div className="comment-header">
                <h4>{author}</h4>
                <p>{created_at.slice(0, 10)}</p>
            </div>
            <p className="comment-body">{body}</p>
            <div className="comment-footer">
                <p>Votes {votes}</p>
            </div>
        </section>
    )
}

export default Comments;