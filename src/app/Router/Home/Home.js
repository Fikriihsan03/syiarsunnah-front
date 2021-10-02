import BlogList from "../../../components/BlogBox/BlogList";
import poster from "./poster.jpeg";
import classes from "./Home.module.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import SelectCategory from "../../../components/SelectCategory/SelectCategory";
import { useState, useEffect } from "react";
const Home = () => {
  const [categoryParam, setCategoryParam] = useState();
  const [searchfield, setSearchfield] = useState("");
  const [clicked, setClicked] = useState(false);
  const [blogData, setBlogData] = useState([]);
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
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredBlogData = blogData.filter((data) => {
    return data.title.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <>
      <img
        src={poster}
        className={classes.Poster}
        alt="poster"
        height="400px"
      />
      <div className="container">
        <div className="row">
          <div className={`col-sm-7 ${classes.BlogList}`}>
            <BlogList
              categoryParam={categoryParam}
              blogData={filteredBlogData}
              setBlogData={setBlogData}
              clicked={clicked}
              setClicked={setClicked}
            />
          </div>
          <div className="col-sm-5" style={{ marginTop: "35px" }}>
            <SearchBar searchChange={onSearchChange}/>
            <SelectCategory setCategoryParam={setCategoryParam} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
