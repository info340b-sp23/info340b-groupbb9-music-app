import React, { UseState } from "react";
import { NavBar } from './Navigation.js';
import { Posts } from './Posts.js';
import { Footer } from './Footer.js';
import CommentViewPost from './CommentViewPost.js';

export function HomePage() {
  const [selectedPostId, setSelectedPostId] = UseState(null);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main> 
      {selectedPostId ? (
          <CommentViewPost postId={selectedPostId} setPostId={setSelectedPostId} />
        ) : (
          <Posts setPostId={setSelectedPostId} />
        )}
      </main>
      <Footer />
    </div>
    
  );
}