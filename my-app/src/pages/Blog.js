import Navbar from '../Navbar';
import Header from '../Header';
import BlogCard from '../BlogCard';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './blog.css';
import blogPosts from '../blogPosts'; 


function BlogPage() {
  const posts = blogPosts;

  return (
    <>
     <Header />
      <div className="row">
        <div className="leftcolumn">
          {posts.map((post, idx) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              date={post.date}
              text={post.text}
            />
        
          ))}
        </div>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;