import styled from 'styled-components';

const Wrapper = styled.section`
  .connect {
    min-height: 40vh;
    position: relative;
    padding: 10rem 0 5rem 0;
    margin: 5rem 0;
  }
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -2;
  }
  .connect::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    /* background: rgba(0, 0, 0, 0.6); */
    opacity: 0.7;
    z-index: -1;
  }
  .connect {
    display: grid;
    place-items: center;
  }
  .video-banner .section-title {
    margin-bottom: 2rem;
  }
  .video-text {
    max-width: 30rem;
  }
  .video-banner {
    background: var(--clr-primary-10);
    padding: 3rem 5rem 12rem 5rem;
    text-align: center;

    -webkit-clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
  }
  .connect {
    -webkit-clip-path: polygon(
      50% 0%,
      100% 10%,
      100% 90%,
      50% 100%,
      0 90%,
      0 10%
    );
    clip-path: polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%);
  }
`;

export default Wrapper;
