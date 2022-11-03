import { useState } from "react";
import { updateVotes } from "../api";

const Votes = ({votes, id}) => {
    const upArrow = require("../assets/up-arrow.png")

    const [voteIncrement, setVoteIncrement] = useState(0);
    const [err, setErr] = useState(null);

    const handleUpVote = () => {
        setVoteIncrement((currVotes) => ++currVotes);
        updateVotes(id, +1).catch(() => {
            setErr('something went wrong, please try again')
        });
    }

    const handleDownVote = () => {
        setVoteIncrement((currVotes) => --currVotes);
        updateVotes(id, -1).catch(() => {
            setErr('something went wrong, please try again')
        });
    }

    if (err) return <p className="vote-error">{err}</p>;
    else return (
        <div className="votes-container">
            <p>{votes + voteIncrement}</p>
            <div className="arrows">
                <button disabled={voteIncrement !== 0} onClick={handleUpVote} className="vote-button-left">
                    <img src={upArrow} className="up-arrow"/>
                </button>
                <button disabled={voteIncrement !== 0} onClick={handleDownVote} className="vote-button-right">
                    <img src={upArrow} className="down-arrow"/>
                </button>
            </div>
        </div>
    )
}

export default Votes;