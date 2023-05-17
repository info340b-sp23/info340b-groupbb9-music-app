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
    </body>
  );
}