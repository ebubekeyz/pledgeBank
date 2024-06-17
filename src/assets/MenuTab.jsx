import styled from 'styled-components';

const Wrapper = styled.section`
  .title {
    text-align: center;
  }

  .title-underline {
    background: var(--primary-500);
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .menu {
    padding: 5rem 0;
  }

  .btn-container {
    margin: 2rem 0 4rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
  }

  .menu-item {
    background: var(--white);
    border-radius: var(--borderRadius);
  }
  .menu-item .img {
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  .item-info {
    padding: 1.5rem;
  }
  .item-info header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .item-info h5 {
    font-weight: 500;
  }
  .item-price {
    background: var(--primary-500);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    letter-spacing: var(--letterSpacing);
    border-radius: var(--borderRadius);
  }

  .item-text {
    line-height: 2;
    color: var(--grey-500);
  }

  .section-center {
    justify-items: center;
  }
  .menu-item {
    max-width: 25rem;
  }

  @media screen and (min-width: 992px) {
    .section-center {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
  @media screen and (min-width: 1170px) {
    .section-center {
      width: 95vw;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Wrapper;
