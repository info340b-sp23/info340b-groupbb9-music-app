import React from "react";
import { NavBar } from './Navigation.js';
import { Posts } from './Posts.js';
import { Footer } from './Footer.js';

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
