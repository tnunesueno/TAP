import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    <ul className="nav-list" id="nav-list">
      <li><a href="./Home" className="nav-link">Home</a></li>
      <li><a href="./About" className="nav-link">About</a></li>
      <li><a href="./Services" className="nav-link">Services</a></li>
      <li><a href="./Team" className="nav-link">Team</a></li>
      <li><a href="./Calendar" className="nav-link">Calendar</a></li>
      <li><a href="./Blogs" className="nav-link">Blogs</a></li>
    </ul>
  </nav>
  );
}

export default Navbar;