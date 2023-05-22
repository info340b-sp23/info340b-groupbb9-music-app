import './index.css';
import { Login } from './loginPage.js'
import { UserProfile } from './ProfilePage';
import { HomePage } from './HomePage.js';

export default function App(props) {
  return (
    <div>
        {/* <Login /> */}
        <UserProfile
          profilePic="../public/img/taylor_swift_eras_tour_1.jpeg" 
          userName="Steven"
          userBio="in my midnight eras~"
          userAnthemURL="https://www.youtube.com/watch?v=lvHZjvIyqsk"
          userAnthem="Maroon"
          favArtist="Taylor Swift"
          favGenre="Pop"
        /> 
        {/*<HomePage />*/}
    </div>    
  );
}