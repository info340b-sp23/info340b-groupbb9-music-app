import React, { useState } from 'react';
import './index.css';
import { NavBar } from "./Navigation";
import { Footer } from "./Footer";
import { getDatabase } from 'firebase/database';

export function UserProfile(props) {
  const [editMode, setEditMode] = useState(false);
  const [userName, setUserName] = useState(props.userName);
  const [userBio, setUserBio] = useState(props.userBio);
  const [userAnthem, setUserAnthem] = useState(props.userAnthem);
  const [userAnthemURL, setUserAnthemURL] = useState(props.userAnthemURL);
  const [favArtist, setFavArtist] = useState(props.favArtist);
  const [favGenre, setFavGenre] = useState(props.favGenre);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = async () => {
    //await updateUserOnServer(userId, { userName, userBio, userAnthem, userAnthemURL, favArtist, favGenre });
    setEditMode(false);
};

  const createNewUser = async (userId, userData) => {
    try {
        const db = getDatabase();
        await db.collection('users').doc(userId).set(userData);
    } catch (error) {
        console.error('Error creating new user: ', error);
    }
};

  const updateUserOnServer = async (userId, updatedUser) => {
    try {
        const db = getDatabase();
        const userRef = db.collection('users').doc(userId);
        const result = await userRef.update(updatedUser);
        return result;
    } catch (error) {
        console.error('Error updating user: ', error);
    }
};

  return (
    <div className="profile_body">
      <header className="profile_header">
        <NavBar />
      </header>
      <div id="profile_main" className="container profile-container"> 
        <div className="row">
          <div className="profile-left">
            <img src={"/img/default_account_logo.png"} alt="user profile picture" className="profile-picture" />
            <h2 className="profile-username">
              {editMode 
                ? <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                : userName }
            </h2>
          </div>
          <div className="profile_right">
            <p className="profile-bio">
              Bio: {editMode 
                ? <textarea value={userBio} onChange={e => setUserBio(e.target.value)} />
                : userBio }
            </p>
            {editMode 
              ? <button onClick={handleSave}>Save</button>
              : <button onClick={handleEdit}>Edit</button>}
             
            <h2>Anthem 🎧</h2>
            <ul className="profile-favorite-songs">
              <li>
                {editMode
                  ? <><input type="text" placeholder="Anthem name" value={userAnthem} onChange={e => setUserAnthem(e.target.value)} /><input type="text" placeholder="Anthem URL" value={userAnthemURL} onChange={e => setUserAnthemURL(e.target.value)} /></>
                  : <a href={userAnthemURL} target="_blank" rel="noopener noreferrer" className="profile_link">{userAnthem}</a> }
              </li>
            </ul>
            <h2>Favorite Artist 🎤</h2>
            <ul className="profile-favorite-artists">
              <li>
                {editMode
                  ? <input type="text" value={favArtist} onChange={e => setFavArtist(e.target.value)} />
                  : favArtist }
              </li>
            </ul>
            <h2>Favorite Genre 🎸</h2>
            <ul className="profile-favorite-genres">
              <li>
                {editMode
                  ? <input type="text" value={favGenre} onChange={e => setFavGenre(e.target.value)} />
                  : favGenre }
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
