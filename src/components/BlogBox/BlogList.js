import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BlogBox from "./BlogBox";
// import { blogData } from "./blogData";

const BlogList = ({ categoryParam,blogData,clicked,setClicked }) => {
  const [displayLimit, setDisplayLimit] = useState(10);

  if (clicked === true) {
    window.location.reload(false);
  }
  // console.log(blogData.map().reverse())
  return (
    <>
      <Router>
        {blogData
          .slice(0, displayLimit)
          .map((_, i) => {
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
          })
          }
      </Router>
      <button className="btn btn-info mx-auto" onClick={()=>setDisplayLimit(displayLimit+10)}> SHOW MORE BLOG </button>
    </>
  );
};

export default BlogList;
// ini di import ke "../../App/Router/Home/Home.js"
