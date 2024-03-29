import React, { useState }from 'react';
import './index.css';
import { Footer } from "./Footer";
import { NavLink } from 'react-router-dom';
export function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  }
  return (
    <main className="login_body">
      <body>
        <div className="container login_container">
          <h1 className="login_heading">compose your social symphony</h1>
          <div>
            <form onSubmit={handleSubmit} method="post" className="login_form">
              <label htmlFor="username">Username:</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} 
                className="login_reactive_field" type="text" id="username" name="username"/>

              <label htmlFor="password">Password:</label>
              <input value={password} unChange={(e) => setPassword(e.target.value)} 
                className="login_reactive_field" type="password" id="password" name="password" />

              <NavLink to="/home">
                <button type="submit" className="login_reactive_field" id="loginButton">Login</button>
              </NavLink>
            </form>
          </div>
          <NavLink to="/register">
            <button className="register_text">Don't have an account? Register here.</button>
          </NavLink>
        </div>
      </body>
      <Footer id="login_footer"/>
    </main>
  );
}

