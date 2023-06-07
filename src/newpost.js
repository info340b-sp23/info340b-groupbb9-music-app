import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue, push } from 'firebase/database';
import { NavBar } from './Navigation.js';
import './index.css';
import { Footer } from "./Footer";


export default function NewPost({ username }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'url') {
      const videoId = extractVideoId(value);
      if (videoId) {
        setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
        setError('');
      } else {
        setThumbnail('');
        setError('Invalid YouTube URL');
      }
    }
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'artist':
        setArtist(value);
        break;
      case 'url':
        setUrl(value);
        break;
      default:
        break;
    }
  };

  const extractVideoId = (url) => {
    const match = url.match(/youtube\.com\/watch\?v=([^\&\?\/]+)/);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && artist && url) {
      const currentDate = new Date();
      const newPostObj = {
      "username": "miles",
      "songTitle": title + " - " + artist,
      "albumArt": thumbnail,
      "link": url,
      "time": currentTime
       createdAt: currentTime
      }
      const db = getDatabase();
      const postsRef = ref(db, "posts");
      push(postsRef, newPostObj);

      setPosts([...posts, newPostObj]);
      setTitle('');
      setArtist('');
      setUrl('');
      setThumbnail('');
      setError('');
      console.log('New post created:', newPostObj);
    } else {
      setError('Please fill in all required fields');
    }
  };

  return (
  <div className="container">
    <header>
      <title>BeatBuds - New Post</title>
      <link rel="stylesheet" href="css/style.css" />
      <meta name="author" content="Miles Lang" />
      <meta
        name="description"
        content="This website offers a way for friends to share their favorite music with each other and allows them to like, comment, and listen to their friends' posts."
      />
      <link rel="icon" type="image/png" href="img/beatbuds.png" />
      <script type="text/javascript" src="helper.js"></script>
    </header>
    <main>
      <nav>
        <a href="index.html">
          <span aria-label="Home">
            <img src="img/beatbuds.png" alt="logo" />
          </span>
        </a>
        <div className="nav-right">
          <a href="newpost.html" id="addPost">
            New Post
          </a>
          <a id="accountButton" onClick={accountDirect}>
            <img src="img/default_account_logo.png" alt="Login" />
          </a>
        </div>
      </nav>
      <h1 className="newpost_heading">Add New Post</h1>
      <form className="new_post_form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required /><br />

        <label htmlFor="artist">Artist:</label>
        <input type="text" id="artist" name="artist" required /><br />

        <label htmlFor="url">URL:</label>
        <input type="text" id="url" name="url" required /><br />

        <input type="submit" value="Submit" />
      </form>
    </main>
  </div>
);


}
