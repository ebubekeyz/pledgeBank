import styled from 'styled-components';

const Wrapper = styled.div`
  .container {
    margin: 2rem 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0 auto;
    max-width: 20rem;
  }
  .upload {
    margin: 1rem auto;
  }
  .input {
    width: 100%;
  }
  .container h4 {
    text-align: center;
    padding-bottom: 1rem;
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
    height: 20%;
  }

  @media screen and (min-width: 1300px) {
    .container {
      left: 60%;
    }
  }
`;

export default Wrapper;
