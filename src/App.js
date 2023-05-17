import './index.css';
import { NavBar } from './Navigation.js';
import { Posts } from './Posts.js';

export default function App() {
  return (
    <body>
      <header>
        <NavBar />
      </header>
      <main>
        <Posts />
      </main>
      <footer>
        <p>&copy; 2023 BeatBuds.  All rights reserved.</p>
      </footer>
    </body>
  );
}