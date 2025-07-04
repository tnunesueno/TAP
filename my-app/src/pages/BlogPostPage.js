import { useParams, Link } from 'react-router-dom';
import  blogPosts from '../blogPosts.js'; // Import the blog posts data
import './blog.css';
import Header from '../Header'; // You can reuse components
import Footer from '../Footer';

function BlogPostPage() {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return <div>
        <h1>Post not found</h1>
         <Link to="/blog">Back to all posts</Link>
    </div>;
    
  }

  return (
    <>
      <div className="blog-post">
        <h1>{post.title}</h1>
        <br />
        
        <h5>{post.date}</h5>
        <h5>{post.description}</h5>
        <div className="blog-content">
          <pre>{post.text}</pre>
        </div>
        <br />
        <br />
        <Link className="back-link" to="/Blog">Back to Blogs</Link>
      </div>
      <Footer />
    </>
  );
}

export default BlogPostPage;