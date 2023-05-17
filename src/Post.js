import React from "react";

function Post({ post }) {
  const {username, songTitle, albumArt, link} = post
  return (
    <div className='post'>
      <p clasName="username">{username}</p>
        <a href={link}><img src={albumArt} alt="album artwork" class="albumArt"></img></a>
        <p>{songTitle}</p>
        <div class="reactions">
          <img src="img/heart.png" alt="like"></img>
          <a href="comment_viewpost1.html"><img src="img/comment.png" alt="comment"></img></a>
          <img src="img/share.png" alt="share"></img>
        </div>
    </div>
  );
}