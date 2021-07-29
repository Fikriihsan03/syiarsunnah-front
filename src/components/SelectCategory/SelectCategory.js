import classes from "./SelectCategory.module.css";

const SelectCategory = ({ setCategoryParam }) => {
  return (
    <>
      <div className={` ${classes.Category}`}>
        <p style={{ marginTop: "15px" }}>Pilihan Kategori:</p>
        <button
          type="button"
          className={`btn btn-info ${classes.CategoryBtn}`}
          onClick={() => setCategoryParam(undefined)}
        >
          All
        </button>
        <button
          type="button"
          className={`btn btn-info ${classes.CategoryBtn}`}
          onClick={() => setCategoryParam("aqidah")}
        >
          Aqidah
        </button>
        <button
          type="button"
          className={`btn btn-info ${classes.CategoryBtn}`}
          onClick={() => setCategoryParam("fiqih")}
        >
          Fiqih
        </button>
        <button
          type="button"
          className={`btn btn-info ${classes.CategoryBtn}`}
          onClick={() => setCategoryParam("nasihat")}
        >
          Nasihat
        </button>
        <button
          type="button"
          className={`btn btn-info ${classes.CategoryBtn}`}
          onClick={() => setCategoryParam("manhaj")}
        >
          Manhaj
        </button>
      </div>
    </>
  );
};

export default SelectCategory;
