import styled from 'styled-components';

const Wrapper = styled.div`
  .page-info {
    max-width: 700px;
  }
  .page-info a {
    text-transform: uppercase;
    color: var(--clr-primary-5);
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .page-info a:hover {
    color: var(--clr-primary-1);
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 1rem;
    background: #222;
    display: grid;
    place-items: center;
    padding-top: 1rem;
  }
  .social-icons {
    display: grid;
    margin-top: 1rem;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }

  .link {
    color: var(--clr-primary-5);
    font-size: 0.9rem;
  }
  @media screen and (min-width: 800px) {
    .social-icons {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .footer .social-icons {
    margin-bottom: 2rem;
  }

  .footer p {
    text-align: center;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Wrapper;
