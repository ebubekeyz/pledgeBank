import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/Login';
import { customFetch } from '../utils';
import { loginUser, logoutUser } from '../features/user/userSlice';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const action = async ({ request }) => {
  const formAlert = document.querySelector('.form-alert');
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const emailId = JSON.parse(localStorage.getItem('emailId'));

  try {
    const response = await customFetch.patch(
      `/auth/${emailId._id}/passwordReset`,
      data
    );

    formAlert.textContent = `Password Reset Successful`;
    formAlert.style.textAlign = 'center';
    formAlert.style.color = 'var(--clr-primary-7)';
    formAlert.style.background = 'rgba(0,0,0,0.7)';

    setTimeout(() => {
      formAlert.textContent = ``;
      formAlert.style.display = 'hidden';
      formAlert.style.background = 'none';
      formAlert.style.background = 'transparent';
    }, 3000);

    return redirect('/login');
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
const PasswordReset = () => {
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

  // const user = useSelector((state) => state.userState.user);

  const [email, setEmail] = useState({
    email: '',
  });

  const [submitting, setSubmitting] = useState('Verify Email');
  const handleEmail = async (e) => {
    const formAlert = document.querySelector('.form-alert');
    const emailForm = document.querySelector('.email-form');
    const emailBtn = document.querySelector('.email-btn');
    const change = document.querySelector('.change');
    e.preventDefault();
    setSubmitting('Verifying Email ....');
    try {
      const response = await customFetch.post('/auth/emailPassword', {
        email: email.email,
      });
      localStorage.setItem('emailId', JSON.stringify(response.data.user));
      setSubmitting('Complete');

      emailForm.style.display = 'none';
      change.style.display = 'block';
    } catch (error) {
      console.log(error);
      setSubmitting('Verify Email');
      formAlert.textContent = error.response.data.msg;
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
    }
  };
  return (
    <Wrapper>
      <div className="login-section">
        <div className="form-alert"></div>

        <div className="sign">
          <button onClick={handleClick} className="btn sign-btn">
            Reset Password
          </button>

          <Link to="/login" className="btn sign-btn">
            Login
          </Link>
        </div>

        <div className="form-control">
          <form onSubmit={handleEmail} className="email-form">
            <FormInput
              type="email"
              label="Type in your account email"
              name="email"
              value={email.email}
              onChange={(e) => {
                setEmail({
                  ...email,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              type="submit"
              className="input btn email-btn"
              value={submitting}
            />
          </form>
          <Form method="patch" className="change">
            <div className="arrow-control">
              <div className="logo">
                <img src="/logo.png" alt="logo" className="logo-img" />
                <h4>Reset Password</h4>
                {/* <h1 className="">Pledge bank</h1> */}

                {/* <span>Your trust, Our Commitment</span> */}
              </div>

              <FaArrowCircleDown onClick={removeClick} className="arrow" />
            </div>

            <div className="pass">
              <FormInput
                label="New Password"
                name="newPassword"
                type="password"
                id="password"
              />
              {showEye ? (
                <FaEye onClick={handleEyeText} className="eye" />
              ) : (
                <FaEyeSlash onClick={handleEyePassword} className="eye" />
              )}
            </div>

            <div className="pass">
              <FormInput
                label="Confirm password"
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

            <SubmitBtn text="Reset" />
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
                to="/login"
                className="link"
                style={{ color: 'var(--clr-grey-6)', fontSize: '0.9rem' }}
              >
                Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default PasswordReset;
