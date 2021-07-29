// import image from "./gambar1.jpg";
const BlogContent = ({ title, article, image, writer, date }) => {
  // const convertBuffer = (file) => {
  //   const img = new Buffer.from(file).toString("ascii");
  //   console.log(img);
  // };
  // convertBuffer(image.data);
  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("-");
  }
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          {/* <img src={convertBuffer(image.data)} alt="..." className="col-md-4" /> */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <small
                style={{
                  background: "cyan",
                  borderRadius: "20px",
                  padding: "3px 12px",
                }}
              >
                penulis : {writer}
              </small>
              <p className="card-text">{article}</p>
              <p className="card-text">
                <small className="text-muted">{convertDate(date)}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
//ini di import ke "./Bloglist.js"
