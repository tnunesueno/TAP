import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import BlogPage from './pages/Blog'; 
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import BlogPostPage from './pages/BlogPostPage'; 

//import BlogPostPage from './pages/BlogPost'; // i need to make this later 

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
   <Navbar  />
   <Routes>
    
        
        <Route path="/" element={<BlogPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/Blog" element={<BlogPage />} />

    </Routes>
      
   </BrowserRouter>
  );
}

export default App;