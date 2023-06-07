import React, { useState } from 'react';

function NewPost() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'url') {
      const videoId = extractVideoId(value);
      if (videoId) {
        setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
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
    return match && match[1];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    // Add your form submission logic here
  };

  return (
    <div>
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
          <a id="accountButton">
            <img src="img/default_account_logo.png" alt="Login" />
          </a>
        </div>
      </nav>
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

        <img src={thumbnail} alt="thumbnail" />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewPost;
