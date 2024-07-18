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
import { FaArrowAltCircleDown, FaRegIdCard, FaTimes } from 'react-icons/fa';

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
  const bal = {
    bal: totalBalance,
  };
  localStorage.setItem('bal', JSON.stringify(bal));

  const { accountNumber, typeOfAccount, updatedAt } = user;

  const filterID = Object.values(deposit).filter(
    (item) => item.user === user._id
  );

  const filterStatus = Object.values(filterID).filter(
    (item) => item.status === 'processing'
  );

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);

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

  const removeAlert = async (id) => {
    const resp = await customFetch.patch(
      `/addFund/${id}`,
      { status: 'sent' },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setShow2(false);
    window.location.reload('');
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

      {show2 &&
        filterStatus.slice(0, 1).map((item) => {
          const { createdAt, amount, accountName, date1, date2, _id } = item;
          return (
            <article
              key={_id}
              className="transfer"
              style={{ padding: '0.2rem 1rem', paddingTop: '0.8rem' }}
            >
              <div className="split">
                {/* <h4 className="date">{date1}</h4> */}
                <FaTimes
                  onClick={() => removeAlert(_id)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="inner-transfer-cont">
                <div className="details">
                  <h4 className="name">Transfer from {accountName}</h4>
                  <p>{date2}</p>
                </div>

                <div className="approve">
                  <h5>Successful</h5>
                  <h4 className="amount">USD {format(amount)}</h4>
                </div>
              </div>

              <div className="more">
                <a
                  href="/dashboard/transaction"
                  className="btn more-btn"
                  style={{
                    textTransform: 'capitalize',
                    padding: '0.3rem',
                    fontSize: '0.9rem',
                    margin: '0',
                  }}
                >
                  View All...
                </a>
              </div>
            </article>
          );
        })}

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
