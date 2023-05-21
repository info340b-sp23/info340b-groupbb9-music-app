import './index.css';
import { NavBar } from './Navigation.js';
import { Posts } from './Posts.js';
import { Login } from './loginPage.js'
import { UserProfile } from "./ProfilePage";
export default function App(props) {
  return (
    <div className='container'>
      <Login />
      <UserProfile 
        userName="Steven"
        userBio="in my midnight eras~"
        userAnthemURL="https://www.youtube.com/watch?v=lvHZjvIyqsk"
        userAnthem="Maroon"
        favArtist="Taylor Swift"
        favGenre="Pop"
      />
    </div>    
  );
}