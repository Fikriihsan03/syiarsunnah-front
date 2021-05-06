// import image from "./gambar1.jpg";
const BlogContent = ({ title, article, image, writer }) => {
  const checkSentence = (str) => {
    const splitStr = str.split("");
    let displayStr = [];
    for (let i = 0; i < 73; i++) {
      displayStr.push(splitStr[i]);
    }
    return displayStr.join("");
  };
  console.log(image);
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <img src={image} alt="..." className="col-md-4" />
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
              <p className="card-text">{checkSentence(article)}...</p>
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
