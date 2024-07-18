import styled from 'styled-components';

const Wrapper = styled.div`
  .form {
    margin: 2rem 0;
  }
  .acc-details {
    display: flex;
    gap: 0.5rem;
  }
  .from p {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .form,
  .to {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0rem;
  }

  .from,
  .to {
    border: 1px solid var(--clr-grey-7);
    border-radius: var(--radius);
    padding: 2rem;
  }

  .name-confirm {
    background: var(--clr-grey-8);
    padding: 0.53rem;
    border-radius: 0.25rem;
  }
  .confirm-btn {
    text-transform: capitalize;
    text-align: center;
    padding: 0.6rem;
  }
  .input-show {
    display: none;
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

  @media screen and (min-width: 1300px) {
    .form {
      margin-bottom: 8rem;
    }
    .form-alert {
      left: 60%;
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
    top: 27px;
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
    top: 18px;
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

  .alert-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    display: none;
    gap: 1rem;
    width: 65%;
    z-index: 15;
    background: var(--clr-grey-10);
  }
  .alert-img h4 {
    margin: 0 auto;
  }

  .alert-img p {
    margin-bottom: 0;
    display: flex;
    justify-content: space-around;
  }
  .c-img {
    justify-self: center;
  }
  .confirmed-img {
    width: 5rem;
  }
  .close {
    background: transparent;
    border: none;
    color: var(--red-dark);
    cursor: pointer;
  }
  .close-btn {
    justify-self: end;
  }

  .bold {
    text-transform: capitalize;
    color: var(--clr-primary-2);
  }
  .show2 {
    display: grid;
  }

  @media screen and (min-width: 1300px) {
    .alert-img {
      left: 60%;
      max-width: 25rem;
    }
    .alert-img p {
      font-size: 0.9rem;
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
    display: none;
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
  .title {
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  .label {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    color: var(--clr-grey-5);
  }
  .transfer-btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-grey-1);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    width: 100%;
    text-align: center;
  }
  .transfer-btn:hover {
    color: var(--clr-grey-10);
    background: var(--clr-primary-5);
  }
  .showPopup {
    display: grid;
  }
  .input {
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
    /* border: none; */
    margin: 0.8rem 0;
    border-radius: var(--radius);
  }

  .msg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-grey-10);
    padding: 2rem;
    z-index: 50;
    width: 90%;
    max-width: 30rem;
    display: none;
  }
  .msg1 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    display: none;
    z-index: 50;
    width: 90%;
    max-width: 30rem;
  }

  .trans-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    width: 100%;
  }
  .trans-inner h3 {
    font-size: 0.9rem;
    letter-spacing: 0rem;
  }

  .trans {
    border: 1px solid var(--clr-primary-4);
    padding: 0rem 0rem;
    padding-bottom: 0;
  }
  .trans-inner h3 {
    padding: 0 1rem;
  }
  .msg h1 {
    font-size: 1.2rem;
  }
  .cont {
    display: flex;
    justify-content: space-between;
  }
  .inline {
    color: red;
    cursor: pointer;
  }
  .msg p {
    color: var(--clr-grey-4);
  }

  .input:focus {
    outline: none;
  }
  .main-btn {
    display: none;
  }
  .pop {
    display: none;
  }
  #sbtn {
    display: none;
  }
  .input::placeholder {
    color: var(--clr-grey-6);
  }
  .label-text {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    color: var(--clr-grey-4);
  }
  @media screen and (min-width: 1300px) {
    .popup {
      left: 60%;
    }
  }
`;

export default Wrapper;
