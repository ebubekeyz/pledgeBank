import styled from 'styled-components';

const Wrapper = styled.section`
  .single-page {
    background: var(--clr-primary-10);
    min-height: calc(100vh - 5rem - 198px);
  }
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
`;

export default Wrapper;
