import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import BlogPage from './pages/Blog'; 
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Calendar from './pages/Calendar';
import Home from './pages/Home';


function App() {

  let Component; 
  switch (window.location.pathname) {
    case '/':
      Component = BlogPage;
      break;
    case '/Home':
      Component = Home;
      break;
    case '/About':
      Component = About;
      break;
    case '/Services':
      Component = Services;
      break;
    case '/Team':
      Component = Team;
      break;
    case '/Calendar':
      Component = Calendar;
      break;
    case '/Blogs':
      Component = BlogPage;
      break;
    default:
      Component = BlogPage; // Default to BlogPage if no match
  }
  return (
    <>
   <Navbar  />
   <Component />
   </>
  );
}

export default App;