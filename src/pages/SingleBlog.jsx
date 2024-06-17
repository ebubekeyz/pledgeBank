import { useLoaderData } from 'react-router-dom';
import { blog } from '../utils';
import { useEffect } from 'react';

export const loader = async ({ params }) => {
  const blogItem = blog.find((item) => item.id === Number(params.id));

  return { blogItem };
};

const SingleBlog = () => {
  const { blogItem } = useLoaderData();
  const { id, text, image, image2, title, body } = blogItem;

  useEffect(() => {
    const bodyMain = document.querySelector('.body-main');
    bodyMain.innerHTML = `${body}`;
    console.log(bodyMain);
  }, []);

  return (
    <div>
      <img
        src={image}
        alt="blog"
        style={{ objectFit: 'cover', height: '40vh' }}
      />

      <article style={{ margin: '4rem 0', transition: 'var(--transition)' }}>
        {' '}
        <h3
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'justify',
            width: '90vw',
            maxWidth: '1170px',
            margin: '0 auto',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            textAlign: 'justify',
            width: '90vw',
            maxWidth: '1170px',
            margin: '0 auto',
          }}
        >
          {text}
        </p>
        <div
          className="body-main"
          style={{
            textAlign: 'justify',
            width: '90vw',
            maxWidth: '1170px',
            margin: '0rem auto',
            marginBottom: '4rem',
            marginTop: '2rem',
          }}
        ></div>
      </article>
    </div>
  );
};
export default SingleBlog;
