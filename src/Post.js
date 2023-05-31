import React from "react";

function Post({ post, setPostId }) {
  const {username, songTitle, albumArt, link, id} = post;
  return (
    <div className='post'>
      <p clasName="username">{username}</p>
        <a href={link}><img src={albumArt} alt="album artwork" class="albumArt"></img></a>
        <p>{songTitle}</p>
        <div class="reactions">
          <img src="img/heart.png" alt="like"></img>
          <img src="img/share.png" alt="share"></img>
        </div>
    </div>
  );
}

export default Post;