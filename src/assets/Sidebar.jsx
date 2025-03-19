import styled from 'styled-components';

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-10);
    z-index: 4;
    display: grid;
    padding-top: 4rem;
   
    /* align-items: center;
  justify-content: center; */
    /* place-items: center; */
    -webkit-transition: var(--transition);
    transition: var(--transition);
    /* add later */
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  /* toggle sidebar */
  .show-sidebar {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .sidebar-links {
    text-align: left;
  }
  .sidebar-links a {
    font-size: 0.9rem;
    text-transform: uppercase;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--clr-grey-10);
    letter-spacing: var(--spacing);
    display: inline-block;
  padding: 1rem 2rem;
     
    background: #0a77bf;
    width: 100%;

  }
  .sidebar-links a:hover {
    background: var(--clr-grey-2);
  }
  .social-icons {
    display: grid;
    margin-top: 3rem;
    width: 20rem;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
  }
  .social-icon {
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .social-icon:hover {
    color: var(--clr-primary-5);
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    background: transparent;
    border: transparent;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
  @media screen and (min-width: 768px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Wrapper;
