import React from 'react';

/*const EXAMPLE_POSTS = [
  { id: '1', username: 'ryo.h', songTitle: 'Racing into the night - Yoasobi', albumArt: 'img/racingintothenight_Yoasobi.jpeg', link: 'https://www.youtube.com/watch?v=x8VYWazR5mE', time: '2023-05-15T12:00:0000' },
  { id: '2', username: 'stev.v', songTitle: 'Maroon (HSB Music Remix) - Taylor Swift', albumArt: 'img/Maroon_TaylorSwift.jpeg', link: 'https://www.youtube.com/watch?v=lvHZjvIyqsk&pp=ygUGbWFycm9u', time: '2023-05-17T12:00:0000' }
];*/

class NewPostClass extends React.Component {
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

  accountDirect() {
    console.log('Account button clicked!');
    // Add logic
  }

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

  
}

function NewPost() {
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

export default NewPost;
