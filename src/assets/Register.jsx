import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .title p {
    width: 80%;
    margin: 0 auto;
  }

  .form-alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: var(--clr-grey-1);
    letter-spacing: 0.03rem;
    padding: 2rem;
    text-align: center;
    border-radius: var(--radius);
  }

  .show {
    display: flex;
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2px;
      margin: 0 auto;
    }
  }
  .about {
    background: var(--clr-white);
    border-radius: var(--radius);
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .btn-container {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .tab-btn:nth-child(1) {
    border-top-left-radius: var(--radius);
  }
  .tab-btn:nth-child(3) {
    border-top-right-radius: var(--radius);
  }
  .tab-btn {
    padding: 1rem 0;
    border: none;
    text-transform: capitalize;
    font-size: 1rem;
    display: block;
    background: var(--clr-grey-9);
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .tab-btn:hover:not(.active) {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }

  /* hide content */
  .content {
    display: none;
  }
  .tab-btn.active {
    background: var(--clr-white);
  }
  .content.active {
    display: block;
  }

  .login-section {
    height: 100vh;
    background: linear-gradient(rgba(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url('/bank.avif') center/cover no-repeat scroll;
  }
  .form-control {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 3.5rem 2rem;
    margin: 0 auto;
    background: var(--clr-grey-1);
    transition: var(--transition);
  }

  .btn-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .reg-btn {
    text-transform: capitalize;
    margin: 1rem 0;
    text-align: center;
  }

  .logo-img {
    width: 2rem;
    text-align: center;
  }

  .logo {
    text-align: center;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    place-items: center;
  }

  .logo h4 {
    font-size: 1.2rem;
    letter-spacing: 0.04rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: var(--ff-primary);
    color: var(--clr-grey-8);
  }
  .link {
    text-align: center;
    color: var(--clr-grey-10);
  }

  @media screen and (min-width: 990px) {
    .form-control {
      left: 50%;
      top: 50%;

      max-width: 50rem;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.5);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    .logo {
      top: 14%;
    }
  }

  .custom-select {
    position: relative;
    font-family: Arial;
  }

  .custom-select {
    position: relative;
    font-family: Arial;
  }

  .custom-select select {
    display: none; /*hide original SELECT element: */
  }

  .select-selected {
    background-color: var(--clr-grey-10);
    transition: var(--transition);
  }

  /* Style the arrow inside the select element: */
  .select-selected:after {
    position: absolute;
    content: '';
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    cursor: pointer;
    border: 6px solid transparent;
    border-color: black transparent transparent transparent;
    transition: var(--transition);
  }

  /* Point the arrow upwards when the select box is open (active): */
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent black transparent;
    top: 12px;
    transition: var(--transition);
  }

  /* style the items (options), including the selected item: */
  .select-items div,
  .select-selected {
    color: var(--clr-grey-1);
    margin: 0.8rem 0;
    padding: 8px 16px;
    border-radius: 0.25rem;
    background: 1px solid rgba(0, 0, 0, 0.5);
    transition: var(--transition);
  }

  /* Style items (options): */
  .select-items {
    transition: var(--transition);
    position: absolute;
    margin: 0.8rem 0;
    border-radius: var(--radius);
    background: white;
    cursor: pointer;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }
  /* .select-items div:hover,
  .select-selected:hover {
    border-bottom: 1px solid var(--clr-primary-5);
  } */
  /* Hide the items when the select box is closed: */
  .select-hide {
    display: none;
  }

  .select-items div:hover,
  .same-as-selected {
    background-color: var(--clr-primary-8);
  }

  .passport,
  .pass {
    width: 8rem;
    object-fit: cover;
    height: 8rem;
    margin: 0 auto;
    border-radius: 30rem;
    border: 2px solid var(--clr-primary-5);
  }

  .formbold-mb-5 {
    margin-bottom: 20px;
  }
  .formbold-pt-3 {
    padding-top: 12px;
  }

  .formbold-form-input {
    width: 100%;
    padding: 12px 24px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: white;
    font-weight: 500;
    font-size: 16px;
    color: #6b7280;
    outline: none;
    resize: none;
  }
  .formbold-form-input:focus {
    border-color: #6a64f1;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold-btn {
    text-align: center;
    font-size: 16px;
    border-radius: 6px;
    padding: 14px 32px;
    border: none;
    font-weight: 600;
    background-color: #6a64f1;
    color: white;
    cursor: pointer;
  }
  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .w-full {
    width: 100%;
  }

  .formbold-file-input input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 10%;
  }
`;

export default Wrapper;
