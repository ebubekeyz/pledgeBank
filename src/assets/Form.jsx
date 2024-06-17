import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 1rem;
  form {
    width: 100%;
    background: var(--clr-white);
    border-radius: 0.5rem;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
  }
  label {
    text-transform: capitalize;
    font-size: 0.9rem;
  }
  /* The container must be positioned relative: */
  .custom-select {
    position: relative;
    font-family: Arial;
  }

  .custom-select select {
    display: none; /*hide original SELECT element: */
  }

  .select-selected {
    background-color: transparent;
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
    border: 6px solid transparent;
    border-color: #222 transparent transparent transparent;
    transition: var(--transition);
  }

  /* Point the arrow upwards when the select box is open (active): */
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #222 transparent;
    top: 7px;
    transition: var(--transition);
  }

  /* style the items (options), including the selected item: */
  .select-items div,
  .select-selected {
    color: var(--clr-grey-3);
    padding: 8px 16px;
    border-radius: 0.25rem;
    border-bottom: 1px solid var(--clr-grey-2);
    transition: var(--transition);
  }

  /* Style items (options): */
  .select-items {
    transition: var(--transition);
    position: absolute;
    background: white;
    cursor: pointer;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .select-items div:hover,
  .select-selected:hover {
    border-bottom: 1px solid var(--clr-primary-5);
  }
  /* Hide the items when the select box is closed: */
  .select-hide {
    display: none;
  }

  .select-items div:hover,
  .same-as-selected {
    background-color: rgba(0,  0,  0,  0.8);
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.75rem 0.75rem;
    border-radius: 0.25rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--clr-grey-1);
    font-size: 0.9rem;
    color: var(--clr-gray-7);
    transition: var(--transition);
  }
  .task-input:focus,
  textarea:focus,
  select:focus {
    background: transparent;
    width: 70%;
    border: none;
    border-bottom: 1px solid var(--clr-primary-5);
    /* border-top: 1px solid var(--clr-primary-5); */

    outline: none;
  }

  .task-input:active,
  textarea:active,
  select:active {
    background: none;
    -webkit-appearance: none;
  }

  input[type='file'] {
    display: none;
  }
  .custom-file-upload {
    text-align: center;
    width: 8rem;
    font-weight: bold;
    border-radius: 0.5rem;
    border: 1px solid var(--clr-grey-7);
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
  .quest {
    margin-bottom: 0;
  }

  .quest-inner {
    display: grid;
    align-items: center;
  }

  .form-row {
    margin-bottom: 1rem;
  }
  textarea {
    width: 100%;
    overflow-y: hidden;
    font-size: 0.9rem;
  }

  ::placeholder {
    color: var(--grey-600);
    font-size: 0.9rem;
  }
  .form-alert {
    color: var(--red-dark);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    text-align: center;
    font-size: 0.8rem;
    transition: var(--transition);
    visibility: hidden;
    padding: 0.5rem;
    background: var(--clr-primary-10);
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  .task-form,
  .single-task-form {
    width: 100%;
    max-width: var(--fixed-width);
    margin: 0 auto;
    margin-top: 1rem;
    transition: var(--transition);
  }
  .task-form h4 {
    text-align: center;
  }

  .submit-btn {
    width: 100%;
    margin-top: 1rem;
  }
  .form-control {
    display: grid;
    gap: 1rem;
  }

  .skill {
    max-width: 50rem;
    margin: 0 auto;
    margin-bottom: 1.25rem;
    margin-top: 4rem;
  }
  .skill p {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: var(--clr-primary-1);
  }
  .skill-container {
    background: var(--clr-grey-9);
    height: 0.5rem;
    width: 100%;
    border-radius: var(--radius);
    position: relative;
  }
  .skill-value {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--clr-primary-5);
    height: 100%;
    width: 0%;
    border-radius: var(--radius);
  }

  .value-20 {
    width: 20%;
  }
  .skill-text-20 {
    left: 20%;
  }
  .value-40 {
    width: 40%;
  }
  .skill-text-40 {
    left: 40%;
  }
  .value-60 {
    width: 60%;
  }
  .skill-text-60 {
    left: 60%;
  }

  .value-80 {
    width: 80%;
  }
  .skill-text-80 {
    left: 80%;
  }
  .value-100 {
    width: 100%;
  }
  .skill-text-100 {
    left: 100%;
  }
  .skill-text {
    position: absolute;
    top: -2rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  @media screen and (min-width: 576px) {
    .task-input {
      border-radius: 0;
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    .submit-btn {
      margin-top: 0;
      width: 175px;
      border-radius: 0;
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
  form > :first-child {
    margin-top: 0;
  }
  form > :last-child {
    margin-bottom: 0;
  }
  /* Basic Classes */
  .alert {
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    border-color: transparent;
    border-radius: 0.25rem;
  }

  .alert-success {
    color: var(--green-dark);
    background-color: var(--green-light);
  }
  .alert-danger {
    color: var(--red-dark);
    background-color: var(--red-light);
  }
  .text-danger {
    color: var(--red-dark);
  }
  .text-success {
    color: var(--green-dark);
  }

  .title {
    text-align: center;
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2rem;
      max-width: 50rem;
      margin: 0 auto;
    }
  }
  .about {
    background: var(--clr-white);
    border-radius: var(--radius);
    display: grid;
    grid-template-rows: auto 1fr;
    padding: 2rem 0;
    transition: var(--transition);
  }

  .about-content {
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    padding: 1rem 1.5rem;
  }
  /* hide content */
  .content {
    display: none;
  }

  .content.active {
    display: block;
  }

  .btn-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }
`;

export default Wrapper;
