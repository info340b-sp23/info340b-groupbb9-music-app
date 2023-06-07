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
      <p clasName="username">{username}</p>
        <a href={link}><img src={albumArt} alt="album artwork" class="albumArt"></img></a>
        <p>{songTitle}</p>
        <div class="reactions">
          <div class="like-button-container">
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
  
  
  const [allPostsArray, setAllPostsArray] = useState(null);
  /*const [postsKeysArray, setPostsKeysArray] = useState(Object.keys(postsValue));*/

  useEffect(() => {
    const db = getDatabase();
    const postsRef = ref(db, "posts");
    const [allPostsArray, setAllPostsArray] = useState([]);

    onValue(postsRef, (snapshot) => {
      const postsValue = snapshot.val();
      console.log(postsValue);
      const postKeysArray = Object.keys(postsValue);
      setAllPostsArray(postsKeysArray.map((key) => {
        const singlePostCopy = {...allPostObjects[key]};
        singlePostCopy.key = key;
        return singlePostCopy;
      }));
      setAllPostsArray(mapAllPosts(postKeysArray, postsValue));
    });

    const unregisterFunction = onValue(postsRef, (snapshot) => {
      const postsValue = snapshot.val();
      /*setPostsValue(null);
      setPostsKeysArray(null);*/
    });

    function cleanup() {
      unregisterFunction(); //call the unregister function
    }
    return cleanup;
  });

  function mapAllPosts(postsKeysArray, allPostObjects) {
    const allPostsArray = postsKeysArray.map((key) => {
      const singlePostCopy = {...allPostObjects[key]};
      singlePostCopy.key = key;
      return singlePostCopy;
    });
    console.log(allPostsArray);
    return allPostsArray;
  }

  console.log(allPostsArray);
  //const orderedPosts = _.reverse(_.sortBy(allPostsArray, allPostsArray.time));
  /*const displayedPosts = orderedPosts.map((post) => {
    return <Post post={post} />
  });*/

  return (
    <div className='posts'>
      {/*displayedPosts*/}
    </div>
  );
}
