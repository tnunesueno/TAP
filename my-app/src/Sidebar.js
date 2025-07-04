import BlogCard from './BlogCard';
import blogPosts from './blogPosts';

function Sidebar() {

  const posts = blogPosts;
  const post = posts[0]; 

  return (
    <div className="rightcolumn">
      <div className="card">
        <h2>About Us</h2>
        {/* <div className="fakeimg" style={{ height: 200 }}>Image</div> */}
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div>
      <div className="card">
        <h3>Popular Post</h3>
        <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              date={post.date}
              text={post.text}
            />
      </div>
    </div>
  );
}

export default Sidebar;