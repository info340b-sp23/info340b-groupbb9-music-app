import './index.css';
import { Login } from './loginPage.js';
import { Register } from './Register.js';
import { UserProfile } from './ProfilePage';
import HomePage from './HomePage.js';
import NewPost from './newpost.js';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile 
          profilePic="../public/img/taylor_swift_eras_tour_1.jpeg" 
          userName="Steven"
          userBio="in my midnight eras~"
          userAnthemURL="https://www.youtube.com/watch?v=lvHZjvIyqsk"
          userAnthem="Maroon"
          favArtist="Taylor Swift"
          favGenre="Pop"  />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="*" element={<Navigate to="/home"/>} />
      </Routes>
    </div>    
  );
}
