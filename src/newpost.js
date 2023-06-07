import React, { useState } from 'react';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';
import { NavBar } from './Navigation.js';

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
    <div>
      <NavBar />
      <h1 className="newpost_heading">Add New Post</h1>
      <form className="new_post_form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={artist}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={url}
          onChange={handleChange}
          required
        />
        <br />

        {error && <p className="error">{error}</p>}

        <img src={thumbnail} alt="thumbnail" />
        <br />

        <input type="submit" value="Submit" />
      </form>

      <h2>Posts</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>Artist: {post.artist}</p>
              <p>URL: {post.url}</p>
              <img src={post.thumbnail} alt="thumbnail" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts yet</p>
      )}
    </div>
  );
}
