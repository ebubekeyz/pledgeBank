import { redirect } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Deposit';
import { FiCopy } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import copy from 'copy-to-clipboard';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Deposit = () => {
  const user = useSelector((state) => state.userState.user);
  const alert = document.querySelector('.form-alert');

  const [copyText, setCopyText] = useState({
    name: `${user.firstName}  ${user.lastName} `,
    number: user.accountNumber,
    sortCode: user.sortCode,
    bank: 'Pledge Bank',
  });

  const handleCopy1 = () => {
    const alert = document.querySelector('.form-alert');
    console.log(alert);
    copy(copyText.name);
    alert.innerHTML = `${copyText.name} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };
  const handleCopy2 = () => {
    const alert = document.querySelector('.form-alert');
    copy(copyText.number);
    alert.innerHTML = `${copyText.number} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };
  const handleCopy3 = () => {
    const alert = document.querySelector('.form-alert');
    copy(copyText.sortCode);
    alert.innerHTML = `${copyText.sortCode} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };
  const handleCopy4 = () => {
    const alert = document.querySelector('.form-alert');
    copy(copyText.bank);
    alert.innerHTML = `${copyText.bank} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };
  return (
    <Wrapper>
      <div className="form-alert"></div>
      <div className="deposit">
        <article className="transfer">
          <h4 className="date">Account Details</h4>
          <div className="inner-transfer-cont">
            <div className="details">
              <h4 className="name">Account Name:</h4>
              <h4>{copyText.name}</h4>
              <FiCopy onClick={handleCopy1} style={{ cursor: 'pointer' }} />
            </div>

            <div className="details">
              <h4 className="name">Account Number:</h4>
              <h4>{copyText.number}</h4>
              <FiCopy onClick={handleCopy2} style={{ cursor: 'pointer' }} />
            </div>

            <div className="details">
              <h4 className="name">Bank Name:</h4>
              <h4>{copyText.bank}</h4>
              <FiCopy onClick={handleCopy4} style={{ cursor: 'pointer' }} />
            </div>

            <div className="details">
              <h4 className="name">Sort Code:</h4>
              <h4>{copyText.sortCode}</h4>
              <FiCopy onClick={handleCopy3} style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};
export default Deposit;
