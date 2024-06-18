import { redirect } from 'react-router-dom';
import { Delete as Del } from '../DashboardComponent';
import Wrapper from '../assets/DashboardWrapper/Cards';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }
  return null;
};

const Cards = () => {
  const user = useSelector((state) => state.userState.user);
  const [show, setShow] = useState(false);
  const handleBalance = () => {
    setShow(!show);
  };
  return (
    <Wrapper>
      <div className="cards">
        <h4>Virtual Card</h4>
        <article className="card-main">
          <div className="header">
            <p>debit</p>
            <img src="/logo.png" alt="logo" style={{ width: '2rem' }} />
          </div>

          <div className="footer">
            <h4 className="name">
              {user.firstName} {user.lastName}
            </h4>
          </div>

          <div className="card-num">
            {show ? <h4>5268 1459 0850 1553</h4> : <h4>**** **** 1553</h4>}
            {show ? (
              <FaEye
                className="text-gray-200 text-lg font-bold cursor-pointer"
                onClick={handleBalance}
              />
            ) : (
              <FaEyeSlash
                className="text-gray-200 text-lg font-bold cursor-pointer"
                onClick={handleBalance}
              />
            )}
          </div>

          <div className="mastercard">
            <div className="exp">
              <div className="exp-flex">
                <h4>Expiry Date</h4>
                <h4>CVV</h4>
              </div>
              <div className="exp-date">
                <h4 style={{ color: 'var(--clr-grey-9)' }}>06/28</h4>
                <h4 style={{ color: 'var(--clr-grey-9)' }}>616</h4>
              </div>
            </div>
            <img
              src="/mastercard.png"
              style={{ width: '5rem' }}
              alt="mastercard"
            />
          </div>
        </article>
      </div>
    </Wrapper>
  );
};
export default Cards;
