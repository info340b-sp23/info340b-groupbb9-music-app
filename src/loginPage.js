import React from 'react';
import './index.css';
import beatbuds from '../public/img/beatbuds.png';
import defaultAccountLogo from '../public/img/default_account_logo.png';

export const Login = () => {
  return (
    <main>
      <div className="login_body">
        <nav>
          <a href="index.html">
            <span aria-label="Home">
              <img src={beatbuds} alt="logo" />
            </span>
          </a>
          <div className="nav-right">
            <a href="newpost.html" id="addPost">New Post</a>
            <a id="accountButton" onClick={accountDirect}>
              <img src={defaultAccountLogo} alt="Login" />
            </a>
          </div>
        </nav>
        <div className="container">
          <header>
            <h1>compose your social symphony~🎶✨</h1>
          </header>
          <form action="#" method="post" className="login_form">
            <label htmlFor="username">Username:</label>
            <input className="login_reactive_field" type="text" id="username" name="username" />

            <label htmlFor="password">Password:</label>
            <input className="login_reactive_field" type="password" id="password" name="password" />

            <button type="button" className="login_reactive_field" id="loginButton" onClick={login}>Login</button>
          </form>
        </div>
        <footer className="login_footer">
          <p>&copy; 2023 BeatBuds. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

