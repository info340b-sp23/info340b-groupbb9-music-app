import React from 'react';
import './index.css';
import { Footer } from "./Footer";
export function Login() {
  return (
    <main id="login_body">
      <body>
        <div className="container" id="login_container">
          <h1 id="login_heading">compose your social symphony</h1>
          <div>
            <form action="#" method="post" className="login_form">
              <label htmlFor="username">Username:</label>
              <input className="login_reactive_field" type="text" id="username" name="username" />

              <label htmlFor="password">Password:</label>
              <input className="login_reactive_field" type="password" id="password" name="password" />

              <button type="button" className="login_reactive_field" id="loginButton" onClick={Login}>Login</button>
            </form>
          </div>
        </div>
      </body>
      <Footer id="login_footer"/>
    </main>
  );
}

