import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <h2>Comments</h2>
      <div className="buttons">
        <button className="btn" onClick={fetchComments}>
          Load Comments
        </button>
      </div>
      <div className="comment card">
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment?"
        />
        <button className="btn submit" onClick={submitComment}>
          Submit
        </button>
      </div>
      {comments.map((comment) => (
        <div className="card" key={`comment-${comment.id}`}>
          <h3>{comment.text}.</h3>
        </div>
      ))}
    </div>
  );
}

export default CommentsPage;
