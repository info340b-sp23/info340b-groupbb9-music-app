import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      url: '',
      thumbnail: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (name === 'url') {
      const videoId = this.extractVideoId(value);
      if (videoId) {
        this.setState({ thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` });
      }
    }
  };

  extractVideoId = (url) => {
    const match = url.match(/youtube\.com\/watch\?v=([^\&\?\/]+)/);
    return match && match[1];
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    // Add your form submission logic here
  };

  render() {
    const { title, artist, url, thumbnail } = this.state;

    return (
      <div>
        <nav>
          <a href="index.html"><span aria-label="Home"><img src="img/beatbuds.png" alt="logo" /></span></a>
          <div className="nav-right">
            <a href="newpost.html" id="addPost">New Post</a>
            <a id="accountButton" onClick={this.accountDirect}><img src="img/default_account_logo.png" alt="Login" /></a>
          </div>
        </nav>
        <h1 className="newpost_heading">Add New Post</h1>
        <form className="new_post_form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={this.handleChange} required /><br />

          <label htmlFor="artist">Artist:</label>
          <input type="text" id="artist" name="artist" value={artist} onChange={this.handleChange} required /><br />

          <label htmlFor="url">URL:</label>
          <input type="text" id="url" name="url" value={url} onChange={this.handleChange} required /><br />

          <img src={thumbnail} alt="thumbnail" /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  accountDirect() {
    console.log('Account button clicked!');
    // Add logic
  }
}

export default NewPost;
