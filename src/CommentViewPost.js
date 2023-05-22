import React, { useState, useEffect } from 'react';
import './index.css';
import { NavBar } from "./Navigation";
import { Footer } from "./Footer";

const EXAMPLE_POSTS = [
  { id: 1, username: 'ryo.h', songTitle: 'Racing into the night - Yoasobi', albumArt: 'img/racingintothenight_Yoasobi.jpeg', link: 'https://www.youtube.com/watch?v=x8VYWazR5mE', time: '2023-05-15T12:00:00Z' },
  { id: 2, username: 'stev.v', songTitle: 'Maroon (HSB Music Remix) - Taylor Swift', albumArt: 'img/Maroon_TaylorSwift.jpeg', link: 'https://www.youtube.com/watch?v=lvHZjvIyqsk&pp=ygUGbWFycm9u', time: '2023-05-17T12:00:00Z' }
];

function CommentViewPost({ postId/*, setPostId */}) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [post, setPost] = useState(EXAMPLE_POSTS[1]);

  useEffect(() => {
    // Fetch post details based on id
    const fetchedPost = EXAMPLE_POSTS.find(post => post.id === postId);
    setPost(fetchedPost);
  }, [postId]);

  const handleCommentSubmit = () => {
    setCommentsList([...commentsList, { name, comment }]);
    setName('');
    setComment('');
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="comment-content">
        <div className="comment-music-post">
          <p className="comment-username">{post.username}</p>
          <a href={post.link}>
            <img src={post.albumArt} alt="album artwork" className="comment-albumArt" />
          </a>
          <p>{post.songTitle}</p>
          <button /*onClick={() => setPostId(null)}*/>Back to posts</button>
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
            ></textarea>
         <button id="submit" className="comment-button" onClick={handleCommentSubmit}>Submit</button>
          </div>
          <div className="comments-list">
            {commentsList.map((comment, index) => (
              <div className="comment" key={index}>
                <p className="comment-user">{comment.name}</p>
                <p className="comment-text">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default CommentViewPost; 
