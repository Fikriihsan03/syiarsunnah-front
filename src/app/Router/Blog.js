import { useState, useEffect } from "react";
import { useParams } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectCategory from "../../components/SelectCategory/SelectCategory";
import "./Blog.css";

const Blog = () => {
  let { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/blogData/${id}`)
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
              className="col-sm-7 content"
              dangerouslySetInnerHTML={{ __html: blogData[0].content }}
            />
            <div className="col-sm-5" style={{ marginTop: "35px" }}>
              <SearchBar />
              <SelectCategory />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Blog;
