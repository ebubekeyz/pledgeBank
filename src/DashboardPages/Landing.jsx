import {
  FaClock,
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaMoneyBill,
  FaReceipt,
  FaSdCard,
} from 'react-icons/fa6';
import { Link, redirect, useLocation } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Landing';
import { useSelector } from 'react-redux';
import { customFetch } from '../utils';
import { formatPrice } from '../utils';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { FaArrowAltCircleDown, FaRegIdCard } from 'react-icons/fa';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Landing = () => {
  const { withdrawBalance, balance, deposit, user } = useSelector(
    (state) => state.userState
  );
  const totalBalance = balance - withdrawBalance;

  const { accountNumber, typeOfAccount, updatedAt } = user;

  const [show, setShow] = useState(false);

  const handleEye = () => {
    setShow(true);
  };
  const handleEye2 = () => {
    setShow(false);
  };

  const reload = () => {
    window.location.reload();
  };

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };


  return (
    <Wrapper>
      <div className="landing">
        <article className="balance">
          <div className="acc">
            <h4>Account</h4>
            <h4>{accountNumber}</h4>
          </div>

          <div className="amount">
            {show ? (
              <h3>USD {format(totalBalance) || 0}</h3>
            ) : (
              <h3>USD ******</h3>
            )}
            {show ? (
              <FaEyeSlash className="eye" onClick={handleEye2} />
            ) : (
              <FaEye className="eye" onClick={handleEye} />
            )}
          </div>

          <p>{typeOfAccount}</p>

          <p>
            Balance Updated at <span>{moment().format('h:mm a')}</span>
          </p>
          <p onClick={reload} style={{ cursor: 'pointer' }} className="refresh">
            <FiRefreshCcw />
            <span style={{ fontSize: '0.8rem' }}>Refresh Balance</span>
          </p>
        </article>

        <article className="services">
          <h4>Services</h4>

          <div className="icons">
            <Link to="/dashboard/sendMoney" className="inner-icon">
              <FaMoneyBill className="ico" />
              <p>Send Money</p>
            </Link>

            <Link to="/dashboard/transaction" className="inner-icon">
              <FaReceipt className="ico" />
              <p>Transactions</p>
            </Link>

            <Link to="/dashboard/cards" className="inner-icon">
              <FaRegIdCard className="ico" />
              <p>Card</p>
            </Link>

            {user.role === 'admin' || user.role === 'owner' ? (
              <Link to="/dashboard/adminDeposit" className="inner-icon">
                <FaMoneyBill className="ico" />
                <p>Deposit</p>
              </Link>
            ) : (
              <Link to="/dashboard/deposit" className="inner-icon">
                <FaMoneyBill className="ico" />
                <p>Deposit</p>
              </Link>
            )}
          </div>
        </article>
      </div>

      {/* {realDeposit.length > 0 ? (
        <article className="transfer">
          <h4 className="date">{moment(createdAt).format('Do MMMM YYYY')}</h4>
          <div className="inner-transfer-cont">
            <div className="details">
              <h4 className="name">Transfer from {accountName}</h4>
              <p>
                {moment(createdAt).format('h mm a')},{' '}
                {moment(createdAt).format('DD/MM/YYYY')}
              </p>
            </div>

            <div className="approve">
              <h5>Approved</h5>
              <h4 className="amount">USD {format(amount)}</h4>
            </div>
          </div>
        </article>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h4>You do not have any Deposit</h4>
        </div>
      )} */}
    </Wrapper>
  );
};
export default Landing;
