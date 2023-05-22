import './index.css';
import { Login } from './loginPage.js'
import { UserProfile } from './ProfilePage';
import { HomePage } from './HomePage.js';
export default function App(props) {
  return (
    <div>
         <Login />
        {/*
        <UserProfile 
          userName="Steven"
          userBio="in my midnight eras~"
          userAnthemURL="https://www.youtube.com/watch?v=lvHZjvIyqsk"
          userAnthem="Maroon"
          favArtist="Taylor Swift"
          favGenre="Pop"
        />  */}
        {/*<HomePage />*/}
    </div>    
  );
}