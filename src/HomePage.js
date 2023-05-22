import React, { UseState } from "react";
import { NavBar } from './Navigation.js';
import { Posts } from './Posts.js';
import { Footer } from './Footer.js';
import CommentViewPost from './CommentViewPost.js';

export default function HomePage() {
  //const [selectedPostId, setSelectedPostId] = UseState(null);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main> 
        <Posts /*setPostId={setSelectedPostId} *//>
      </main>
      <Footer />
    </div>  
  );
}