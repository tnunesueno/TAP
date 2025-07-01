import Navbar from '../Navbar';
import Header from '../Header';
import BlogCard from '../BlogCard';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './blog.css';

function BlogPage() {
  const blogPosts = [
    {
      title: "TITLE HEADING",
      description: "Title description",
      date: "Dec 7, 2017",
      text: "Some text.."
    },
    {
      title: "TITLE HEADING",
      description: "Title description",
      date: "Sep 2, 2017",
      text: "Some text.."
    }
  ];

  return (
    <>
      <Header />
      <div className="row">
        <div className="leftcolumn">
          {blogPosts.map((post, idx) => (
            <BlogCard
              key={idx}
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