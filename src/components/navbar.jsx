import '../styles/navbar.css';
import logo from '../images/youtube-icon-white.png'
import mic from '../images/microphone_retro_icon-icons.com_67975_white.png'
import video from '../images/video_plus_icon_136058_white.png'
import bell from '../images/ios7-bell-outline_icon-icons.com_50335_white.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className='logoLink' to="/">
        <div className="logo">
          <img src={logo} alt="YouTube Logo" /><span>IN</span>
        </div>
      </Link>
      <div className="search">
        <input type="text" placeholder='Search' />
        <img className='mic' src={mic} alt="" />
      </div>
      <div className="icons">
        <Link className='addVideosLink' to="/addVideo">
          <img src={video} alt="" />
        </Link>
        <img src={bell} alt="" />
        <span>A</span>
      </div>
    </nav>
  );
};

export default Navbar;