import classes from "./SelectCategory.module.css";

const SelectCategory = () => {
  return (
    <>
      <div className={` ${classes.Category}`}>
        <p style={{ marginTop: "15px" }}>Pilihan Kategori:</p>
        <button type="button" className={`btn btn-info ${classes.CategoryBtn}`}>
          Tauhid
        </button>
        <button type="button" className={`btn btn-info ${classes.CategoryBtn}`}>
          Fiqih
        </button>
        <button type="button" className={`btn btn-info ${classes.CategoryBtn}`}>
          Nasihat
        </button>
        <button type="button" className={`btn btn-info ${classes.CategoryBtn}`}>
          Manhaj
        </button>
        <button type="button" className={`btn btn-info ${classes.CategoryBtn}`}>
          info terbaru
        </button>
      </div>
    </>
  );
};

export default SelectCategory;
