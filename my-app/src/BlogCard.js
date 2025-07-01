function BlogCard({ title, description, date, text }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h5>{description}, {date}</h5>
      <p>{text}</p>
    </div>
  );
}

export default BlogCard; 