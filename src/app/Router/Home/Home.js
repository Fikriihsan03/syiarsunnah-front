import BlogList from "../../../components/BlogBox/BlogList";
import poster from "./poster.jpeg";
import classes from "./Home.module.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import SelectCategory from "../../../components/SelectCategory/SelectCategory";
import { useState } from "react";
const Home = () => {
  const [categoryParam, setCategoryParam] = useState();
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
            <BlogList categoryParam={categoryParam} />
          </div>
          <div className="col-sm-5" style={{ marginTop: "35px" }}>
            <SearchBar />
            <SelectCategory setCategoryParam={setCategoryParam} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
