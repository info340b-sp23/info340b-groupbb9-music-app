import { NavLink } from 'react-router-dom';
export function NavBar() {
  return (
    <nav>
      <div className='nav-left'>
        <span aria-label="Home"><NavLink to="/home"><img src="img/beatbuds.png" alt="logo"></img></NavLink></span>
        <a href="index.html"></a>
      </div>
      <div className='nav-center'>
        <span aria-label="Home"><NavLink to="/home"><h1 className='header-title'>BEATBUDS</h1></NavLink></span>
      </div>
      <div className="nav-right">
        <NavLink to="/newPost">New Post</NavLink>
        <NavLink to="/profile"><img src="img/default_account_logo.png" alt="Login"></img></NavLink>
      </div>
    </nav>
  );
}
