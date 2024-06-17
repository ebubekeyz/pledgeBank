import { Link } from 'react-router-dom';
import Wrapper from '../assets/Blog';
import { blog } from '../utils';

const Blog = () => {
  return (
    <Wrapper>
      {' '}
      <section className="section blog">
        {/* <!-- section title --> */}
        <div className="section-title">
          <h2>blog</h2>
          <div className="underline"></div>
        </div>
        {/* <!--end of section title --> */}
        <div className="section-center blog-center">
          {/* <!-- single article --> */}
          {blog.map((item) => {
            const { id, image, image2, text, title } = item;
            return (
              <article key={id} className="card">
                {/* <!-- front of the card --> */}
                <div className="card-side card-front">
                  <img src={image} alt="project1" />
                  <div className="card-info">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    {/* <div className="card-footer">
                      <img src={image2} />
                      <p>7 min read</p>
                    </div> */}
                  </div>
                </div>
                {/* <!-- card back  --> */}
                <div className="card-side card-back">
                  <Link to={`/singleBlog/${id}`} className="btn">
                    read more
                  </Link>
                </div>
              </article>
            );
          })}
          {/* <!-- end of single article --> */}
        </div>
      </section>
    </Wrapper>
  );
};
export default Blog;
