import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { FacebookShareButton, TwitterShareButton} from 'react-share';
import { FacebookIcon, TwitterIcon} from 'react-share';
import { getDatabase, ref, onValue } from 'firebase/database';

const EXAMPLE_POSTS = [
  { id: '1', username: 'ryo.h', songTitle: 'Racing into the night - Yoasobi', albumArt: 'img/racingintothenight_Yoasobi.jpeg', link: 'https://www.youtube.com/watch?v=x8VYWazR5mE', time: '2023-05-15T12:00:0000' },
  { id: '2', username: 'stev.v', songTitle: 'Maroon (HSB Music Remix) - Taylor Swift', albumArt: 'img/Maroon_TaylorSwift.jpeg', link: 'https://www.youtube.com/watch?v=lvHZjvIyqsk&pp=ygUGbWFycm9u', time: '2023-05-17T12:00:0000' }
];

/*Takes in a post object with post id, username, song title, album art source, 
  a link to the song on youtube, and the time of posting */
function Post({ post }) {
  const { username, songTitle, albumArt, link} = post
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  return (
    <div className='post'>
      <p className="username">{username}</p>
        <a href={link}><img src={albumArt} alt="album artwork" className="albumArt"></img></a>
        <p>{songTitle}</p>
        <div className="reactions">
          <div className="like-button-container">
          <button 
            className={`like-button ${liked ? 'liked' : ''}`}
            onClick={() => {
              setLikes(likes + 1);
              setLiked(true);

            }}
          >
            {likes} Likes
          </button>
          </div>
          <div className="share-button">
            <FacebookShareButton
              url={link}
              quote={songTitle}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className="share-button">
            <TwitterShareButton
              url={link}
              quote={songTitle}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
    </div>
  )
}

/* Takes in an array of post objects */
export function Posts() {
  const [allPostsArray, setAllPostsArray] = useState([]);
  const [postKeysArray, setPostKeysArray] = useState([]);
  const [postObjects, setPostObjects] = useState([]);
  /*const [postsKeysArray, setPostsKeysArray] = useState(Object.keys(postsValue));*/
  //let allPostsArray = [];

  useEffect(() => {
    const db = getDatabase();
    const postsRef = ref(db, "posts");

    const unregisterFunction = onValue(postsRef, (snapshot) => {
      const postsValue = snapshot.val();
      const postKeysArray = Object.keys(postsValue);

      const postsArray = postKeysArray.map((key) => {
        const singlePostCopy = {...postsValue[key]};
        singlePostCopy.key = key;
        return singlePostCopy;
      });
      postsArray.sort((a, b) => b.time - a.time);
      setAllPostsArray(postsArray);
    });

    function cleanup() {
      unregisterFunction(); //call the unregister function
    }
    return cleanup;
  }, []);

  
  const displayedPosts = allPostsArray.map((post) => {
    return <Post key={post.key} post={post} />
  });

  return (
    <div className='posts'>
      {displayedPosts}
    </div>
  );
}
