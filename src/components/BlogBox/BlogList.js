import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BlogBox from "./BlogBox";
// import { blogData } from "./blogData";

const BlogList = ({ categoryParam }) => {
  const [blogData, setBlogData] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (categoryParam === undefined) {
      fetch("http://localhost:3001/blogData")
        .then((res) => res.json())
        .then((data) => setBlogData(data));
    } else {
      fetch(`http://localhost:3001/blogData/${categoryParam}`)
        .then((res) => res.json())
        .then((data) => setBlogData(data));
    }
  }, [categoryParam]);

  if (clicked === true) {
    window.location.reload(false);
  }
  return (
    <>
      <Router>
        {blogData.map((_, i) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/blog/${blogData[i].category}?id=${blogData[i].id}`}
              key={[i]}
              onClick={() => setClicked(true)}
            >
              <BlogBox
                image={blogData[i].image}
                title={blogData[i].title}
                article={blogData[i].sub_title}
                writer={blogData[i].author}
                date={blogData[i].date}
              />
            </Link>
          );
        })}
      </Router>
    </>
  );
};

export default BlogList;
// ini di import ke "../../App/Router/Home/Home.js"
