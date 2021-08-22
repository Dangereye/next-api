import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch(`/api/comments`);
    const data = await response.json();
    setComments(data);
  };

  return (
    <div className="container">
      <h2>Comments</h2>
      <div className="buttons">
        <button className="btn" onClick={fetchComments}>
          Load Comments
        </button>
      </div>
      {comments.map((comment) => (
        <div className="card" key={`comment-${comment.id}`}>
          <h3>
            {comment.id}. {comment.text}.
          </h3>
        </div>
      ))}
    </div>
  );
}

export default CommentsPage;
