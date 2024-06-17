import { useLoaderData } from 'react-router-dom';
import { service } from '../utils';

export const loader = async ({ params }) => {
  const serviceItem = service.find((item) => item.id === Number(params.id));

  return { serviceItem };
};

const SingleService = () => {
  const { serviceItem } = useLoaderData();
  const {
    id,
    text,
    image,
    title,
    subtitle1,
    body1,
    subtitle2,
    body2,
    subtitle3,
    body3,
    subtitle4,
    body4,
    subtitle5,
    body5,
    subtitle6,
    body6,
  } = serviceItem;
  return (
    <div>
      <img
        src={image}
        alt="blog"
        style={{ objectFit: 'cover', height: '40vh' }}
      />

      <article style={{ margin: '4rem 0', transition: 'var(--transition)' }}>
        <h3
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'center',
            margin: '0 auto',
            marginBottom: 0,
          }}
        >
          {title}
        </h3>
        <div
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'center',
            margin: '0 auto',
            marginBottom: '2rem',
            borderBottom: '3.5px solid var(--clr-grey-8)',
            maxWidth: '12rem',
            padding: '0.5rem 0',
            paddingTop: '0rem',
          }}
        ></div>
        <p
          style={{
            textAlign: 'center',
            width: '90vw',
            maxWidth: '1127px',
            margin: '0 auto',
          }}
        >
          {text}
        </p>

        <h4
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'center',
            margin: '2rem auto',
            marginBottom: 0,
          }}
        >
          {subtitle1}
        </h4>

        <p
          style={{
            textAlign: 'center',
            width: '90vw',
            maxWidth: '1127px',
            margin: '1rem auto',
          }}
        >
          {body1}
        </p>

        <h4
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'center',
            margin: '2rem auto',
            marginBottom: 0,
          }}
        >
          {subtitle2}
        </h4>

        <p
          style={{
            textAlign: 'center',
            width: '90vw',
            maxWidth: '1127px',
            margin: '1rem auto',
          }}
        >
          {body2}
        </p>

        <h4
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'center',
            margin: '2rem auto',
            marginBottom: 0,
          }}
        >
          {subtitle3}
        </h4>

        <p
          style={{
            textAlign: 'center',
            width: '90vw',
            maxWidth: '1127px',
            margin: '1rem auto',
          }}
        >
          {body3}
        </p>

        <h4
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'center',
            margin: '2rem auto',
            marginBottom: 0,
          }}
        >
          {subtitle4}
        </h4>

        <p
          style={{
            textAlign: 'center',
            width: '90vw',
            maxWidth: '1127px',
            margin: '1rem auto',
          }}
        >
          {body4}
        </p>

        <h4
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'center',
            margin: '2rem auto',
            marginBottom: 0,
          }}
        >
          {subtitle5}
        </h4>

        <p
          style={{
            textAlign: 'center',
            width: '90vw',
            maxWidth: '1127px',
            margin: '1rem auto',
          }}
        >
          {body5}
        </p>

        <h4
          style={{
            color: 'var(--clr-primary-5)',
            textAlign: 'center',
            margin: '2rem auto',
            marginBottom: 0,
          }}
        >
          {subtitle6}
        </h4>

        <p
          style={{
            textAlign: 'center',
            width: '90vw',
            maxWidth: '1127px',
            margin: '1rem auto',
          }}
        >
          {body6}
        </p>
      </article>
    </div>
  );
};
export default SingleService;
