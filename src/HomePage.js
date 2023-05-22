import React from "react";
import { NavBar } from './Navigation.js';
import { Posts } from './Posts.js';
import { Footer } from './Footer.js';

export function HomePage() {
  return(
    <div>
      <header>
        <NavBar />
      </header>
      <main> 
        <Posts />
      </main>
      <Footer />
    </div>
    
  );
}
