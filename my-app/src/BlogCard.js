import { Link } from 'react-router-dom'; 
import './pages/blog.css';

function BlogCard({ id, title, description, date, text }) {
  return (
     <Link to={`/blog/${id}`} className="card-link">
        <div className="card">
          <h2>{title}</h2>
          <h5>{description}</h5>
          <h5>{date}</h5>
      </div>
       </Link>
   
  );
}

export default BlogCard; 