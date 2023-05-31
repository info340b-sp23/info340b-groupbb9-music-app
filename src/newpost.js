import React from 'react';

class NewPost extends React.Component {
  render() {
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
          <input type="text" id="title" name="title" required /><br />

          <label htmlFor="artist">Artist:</label>
          <input type="text" id="artist" name="artist" required /><br />

          <label htmlFor="url">URL:</label>
          <input type="text" id="url" name="url" required /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  accountDirect() {
    console.log('Account button clicked!');
    // logic
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
    // submission logic
  }
}

export default NewPost;
