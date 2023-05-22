import React, { useState } from 'react';
import './index.css';

const CommentViewPost = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = () => {
    const newComment = { name, comment };
    setCommentsList([...commentsList, newComment]);
    setName('');
    setComment('');
  };

  return (
    <div className="comment-content">
      <div className="comment-music-post">
        <p className="comment-username">stev.v</p>
        <a href="https://www.youtube.com/watch?v=lvHZjvIyqsk&pp=ygUGbWFycm9u">
          <img src="img/Maroon_TaylorSwift.jpeg" alt="album artwork" className="comment-albumArt" />
        </a>
        <p>Maroon (HSB Music Remix) - Taylor Swift</p>
      </div>
      <div className="comment-comments-section">
        <h3>Comments</h3>
        <div className="comment-form">
          <input 
            type="text" 
            id="name" 
            className="comment-input" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          <textarea 
            id="comment" 
            className="comment-textarea" 
            rows="4" 
            cols="50" 
            placeholder="Write your comment here..." 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button 
            id="submit" 
            className="comment-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="comments-list">
          {commentsList.map((comment, index) => (
            <div key={index} className="comment">
              <p className="comment-user">{comment.name}</p>
              <p className="comment-text">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentViewPost;
