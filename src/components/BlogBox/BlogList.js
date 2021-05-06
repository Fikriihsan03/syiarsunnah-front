import BlogBox from "./BlogBox";
import { content } from "./content";

const BlogList = () => {
  return (
    <>
      {content.map((_, i) => {
        return (
          <BlogBox
            key={[i]}
            image={content[i].image}
            title={content[i].title}
            article={content[i].articleContent}
            writer={content[i].writerName}
          />
        );
      })}
    </>
  );
};

export default BlogList;
// ini di import ke "../../App/Router/Home/Home.js"
