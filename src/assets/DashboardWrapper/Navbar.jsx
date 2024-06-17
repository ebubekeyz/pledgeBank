import styled from 'styled-components';

const Wrapper = styled.div`
  .inner {
    color: var(--clr-primary-5);
  }
  .nav-logo {
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    text-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  .passport,
  .pass {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 30rem;
    object-fit: cover;
  }
  .pass-ico {
    display: flex;
    gap: 0.7rem;
    align-items: center;
  }
  .bell {
    animation: move 0.5s linear infinite;
  }

  @keyframes move {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(-10deg);
    }
  }
  .num {
    background: var(--clr-primary-5);
    text-align: center;
    border-radius: 10rem;
    padding: 0.2rem 0.4rem;
    font-size: 0.6rem;
    font-weight: 700;
  }
  .nav {
    height: 5rem;
    padding: 1rem;
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .nav-center {
    width: 98%;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header {
    display: grid;
    grid-template-columns: auto 1fr;
    -webkit-box-align: center;
    align-items: center;
  }
  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  @media screen and (min-width: 1300px) {
    .nav {
      background: var(--clr-primary-10);
    }

    /* .nav-links {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
      justify-self: end;
    } */

    .nav-links .link:hover {
      color: var(--clr-primary-5);
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1000px;
      margin-left: 18rem;
    }
    .nav-btn {
      display: none;
    }
  }

  .popup {
    display: grid;
    gap: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 30rem;
    background: var(--clr-white);
    padding: 2rem;
    transform: translate(-50%, -50%);
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
  }
  .popup h4 {
    text-align: center;
  }
  .close-btn {
    text-align: right;
    cursor: pointer;
  }
  .envelope {
    width: 7rem;
    margin: 0 auto;
  }
  .envelope-link {
    text-align: center;

    text-transform: capitalize;
  }

  @media screen and (min-width: 1300px) {
    .popup {
      left: 60%;
    }
  }
`;

export default Wrapper;
