import { useState } from "react";
import "../styles/post.css";

function Post({ name, content, image }) {

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="post">

      <div className="post-header">
        <div className="profile-circle">
          {name.charAt(0)}
        </div>

        <div>
          <h3>{name}</h3>
          <p>2h • 🌐</p>
        </div>
      </div>

      <p className="post-content">
        {content}
      </p>

      {image && (
        <img 
          className="certificate"
          src={image}
          alt="certificate"
        />
      )}

      <div className="post-actions">

        <button onClick={handleLike}>
          {liked ? "👍 Liked" : "👍 Like"} {likes}
        </button>

        <button>
          💬 Comment
        </button>

        <button>
          🔁 Share
        </button>

      </div>


      <div className="comment-section">

        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={addComment}>
          Post
        </button>

      </div>


      <div className="comments">

        {comments.map((item, index) => (
          <p key={index}>
            👤 User: {item}
          </p>
        ))}

      </div>

    </div>
  );
}

export default Post;