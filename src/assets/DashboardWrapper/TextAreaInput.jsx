import styled from 'styled-components';

const Wrapper = styled.aside`
  .textarea {
    width: 100%;
    height: 8rem;
    padding: 1rem 1rem;
    border: 2px solid var(--clr-grey-7);
    border-radius: var(--radius);
  }
  .textarea::placeholder {
    font-size: 1rem;
    color: var(--clr-grey-6);
  }
`;

export default Wrapper;
