import styled from 'styled-components';

const Wrapper = styled.div`
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
    border: 6px solid transparent;
    border-color: black transparent transparent transparent;
    transition: var(--transition);
  }

  /* Point the arrow upwards when the select box is open (active): */
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #e8e9e8 transparent;
    top: 7px;
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
`;

export default Wrapper;
