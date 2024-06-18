import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/Login';
import { customFetch } from '../utils';
import { loginUser, logoutUser } from '../features/user/userSlice';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const action =
  (store) =>
  async ({ request }) => {
    const formAlert = document.querySelector('.form-alert');
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const popup = document.querySelector('.popup');

    try {
      const response = await customFetch.post('/auth/local', data);

      popup.classList.add('showPopup');
      formAlert.textContent = `OTP code was sent to your email address.`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
      }, 3000);
      store.dispatch(loginUser(response.data));

      return null;
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response.data.msg || 'please double check your credentials';
      formAlert.textContent = errorMessage;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
      }, 3000);

      return null;
    }
  };
const Login = () => {
  const [num, setNum] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    const formControl = document.querySelector('.form-control');
    formControl.classList.toggle('show');
  };
  const removeClick = () => {
    const formControl = document.querySelector('.form-control');
    formControl.classList.toggle('show');
  };

  const [showEye, setShowEye] = useState(false);

  const handleEyeText = () => {
    const password = document.querySelector('#password');
    setShowEye(false);
    password.type = 'text';
  };

  const handleEyePassword = () => {
    const password = document.querySelector('#password');
    setShowEye(true);
    password.type = 'password';
  };

  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const clickOtp = () => {
    const otp = document.querySelector('.otp').value;
    const popup = document.querySelector('.popup');

    const formAlert = document.querySelector('.form-alert');

    if (otp == user.otp) {
      formAlert.textContent = `Login Successful`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
      }, 3000);
      popup.classList.remove('showPopup');
      return navigate('/dashboard');
    } else {
      formAlert.textContent = `OTP Verification Failed`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
        popup.classList.remove('showPopup');
      }, 3000);
      dispatch(logoutUser());
      return navigate('/login');
    }
  };
  return (
    <Wrapper>
      <div className="login-section">
        <div className="form-alert"></div>

        <div className="sign">
          <button onClick={handleClick} className="btn sign-btn">
            Sign in
          </button>

          <Link to="/register" className="btn sign-btn">
            Sign up
          </Link>
        </div>

        <Form method="post" className="form-control">
          <div className="arrow-control">
            <div className="logo">
              <img src="/logo.png" alt="logo" className="logo-img" />
              <h4>Sign in</h4>
              {/* <h1 className="">Pledge bank</h1> */}

              {/* <span>Your trust, Our Commitment</span> */}
            </div>

            <FaArrowCircleDown onClick={removeClick} className="arrow" />
          </div>
          <FormInput label="email" name="email" type="email" />
          <div className="pass">
            <FormInput
              label="password"
              name="password"
              type="password"
              id="password"
            />
            {showEye ? (
              <FaEye onClick={handleEyeText} className="eye" />
            ) : (
              <FaEyeSlash onClick={handleEyePassword} className="eye" />
            )}
          </div>

          <SubmitBtn text="Sign in" />
          <div
            className=""
            style={{
              textAlign: 'center',
              margin: '1rem 0',
              display: 'grid',
              gap: '0.5rem',
            }}
          >
            <Link
              to="/register"
              className="link"
              style={{ color: 'var(--clr-grey-6)', fontSize: '0.9rem' }}
            >
              Register if you already have an account
            </Link>

            <Link
              to="/passwordReset"
              className="link"
              style={{ color: 'var(--clr-grey-6)', fontSize: '0.9rem' }}
            >
              Forgot Password?
            </Link>
          </div>
        </Form>

        <div className="popup">
          <h4>OTP Verification Code</h4>
          <input
            type="text"
            className="input otp"
            placeholder="Please Type in your otp verification here"
          />
          <button className="btn" onClick={clickOtp}>
            Submit Otp Code
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Login;
