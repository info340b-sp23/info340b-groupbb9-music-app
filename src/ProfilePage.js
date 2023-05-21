import React from 'react';
import './index.css';
import profilePic from '../public/img/taylor_swift_eras_tour_1.jpeg';
import { NavBar } from "./Navigation";
import { Footer } from "./Footer";
export const UserProfile = (props) => {
  return (
    <div className="profile_body">
      <header className="profile_header">
        <NavBar />
      </header>
      <div id="profile_main" className="container profile-container"> 
        <div className="row">
          <div className="col-lg-4">
            <img src={profilePic} alt="user profile picture" className="profile-picture" />
            <h2 className="profile-username">{props.userName}</h2>
            <p className="profile-bio">Bio: {props.userBio}</p>
          </div>
          <div className="col-lg-8">
            <h2>Anthem 🎧</h2>
            <ul className="profile-favorite-songs">
              <li><a href={props.userAnthemURL} target="_blank" rel="noopener noreferrer" className="profile_link">{props.userAnthem}</a></li>
            </ul>
            <h2>Favorite Artist 🎤</h2>
            <ul className="profile-favorite-artists">
              <li>{props.favArtist}</li>
            </ul>
            <h2>Favorite Genre 🎸</h2>
            <ul className="profile-favorite-genres">
              <li>{props.favGenre}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

