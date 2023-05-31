import React from 'react';
import './index.css';
import { Footer } from "./Footer";
export function Login() {
  return (
    <main>
        <div className="container">
          <header>
            <h1>compose your social symphony~🎶✨</h1>
          </header>
          <form action="#" method="post" className="login_form">
            <label htmlFor="username">Username:</label>
            <input className="login_reactive_field" type="text" id="username" name="username" />

            <label htmlFor="password">Password:</label>
            <input className="login_reactive_field" type="password" id="password" name="password" />

            <button type="button" className="login_reactive_field" id="loginButton" onClick={Login}>Login</button>
          </form>
          <Footer />
        </div>
    </main>
  );
}

