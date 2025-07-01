import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
     <nav className="navbar">
      <ul className="nav-list" id="nav-list">
        <li><Link to="/Home" className="nav-link">Home</Link></li>
        <li><Link to="/About" className="nav-link">About</Link></li>
        <li><Link to="/Services" className="nav-link">Services</Link></li>
        <li><Link to="/Team" className="nav-link">Team</Link></li>
        <li><Link to="/Calendar" className="nav-link">Calendar</Link></li>
        <li><Link to="/Blog" className="nav-link">Blogs</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;