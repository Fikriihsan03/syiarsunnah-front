// import image from "./gambar1.jpg";
const BlogContent = ({ title, article, image, writer }) => {
  const convertBuffer = (file) => {
    const img = new Buffer.from(file).toString("ascii");
    // return img;
  };
  convertBuffer(image.data);
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
                <small className="text-muted">Last updated 3 mins ago</small>
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
