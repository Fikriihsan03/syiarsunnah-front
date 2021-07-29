import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import "./Blog.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Blog = () => {
  let { category } = useParams();
  let query = useQuery();
  const id = query.get("id");
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/blogData/${category}?${id}`)
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  if (blogData.length === 0) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <>
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 content"
              dangerouslySetInnerHTML={{ __html: blogData[0].content }}
            />
          </div>
        </div>
      </>
    );
  }
};

export default Blog;
