function BlogCard({ title, description, date, text }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h5>{description}, {date}</h5>
      {/* <div className="fakeimg" style={{ height: 200 }}>Image</div> */}
      <p>{text}</p>
    </div>
  );
}

export default BlogCard; 