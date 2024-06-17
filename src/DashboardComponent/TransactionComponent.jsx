import moment from 'moment';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/DashboardWrapper/Transact';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const TransactionComponent = () => {
  const [show, setShow] = useState(true);

  const handleIncoming = () => {
    setShow(false);
  };

  const handleOutgoing = () => {
    setShow(true);
  };

  const { withdraw, deposit } = useLoaderData();

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const realWithdraw = Object.values(withdraw);
  return (
    <Wrapper>
      {show ? (
        <div className="transact">
          <div className="sub-menu">
            <div>
              <h4>Outgoing</h4>
            </div>

            <div className="btn security" onClick={handleIncoming}>
              Incoming
            </div>
          </div>
          {realWithdraw.map((item) => {
            const { createdAt, amount, accountName, date1, date2, _id } = item;

            return (
              // <article key={_id} className="transfer">
              //   <h4 className="date">
              //     {moment(createdAt).format('Do MMMM YYYY')}
              //   </h4>
              //   <div className="inner-transfer-cont">
              //     <div className="details">
              //       <h4 className="name">Transfer to {accountName}</h4>
              //       <p>
              //         {moment(createdAt).format('h:mm a')},{' '}
              //         {moment(createdAt).format('DD/MM/YYYY')}
              //       </p>
              //     </div>

              //     <div className="approve">
              //       <h5>Successful</h5>
              //       <h4 className="amount">USD {format(amount)}</h4>
              //     </div>
              //   </div>
              // </article>
              <article key={_id} className="transfer">
                <h4 className="date">{date1}</h4>
                <div className="inner-transfer-cont">
                  <div className="details">
                    <h4 className="name">Transfer to {accountName}</h4>
                    <p>{date2}</p>
                  </div>

                  <div className="approve">
                    <h5>Successful</h5>
                    <h4 className="amount">USD {format(amount)}</h4>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="transact">
          <div className="sub-menu">
            <div className="editAccount">
              <h4>Incoming</h4>
            </div>

            <div className="btn security" onClick={handleOutgoing}>
              Outgoing
            </div>
          </div>
          {Object.values(deposit).map((item) => {
            const { createdAt, amount, accountName, date1, date2, _id } = item;

            return (
              // <article key={_id} className="transfer">
              //   <h4 className="date">
              //     {moment(createdAt).format('Do MMMM YYYY')}
              //   </h4>
              //   <div className="inner-transfer-cont">
              //     <div className="details">
              //       <h4 className="name">Transfer from {accountName}</h4>
              //       <p>
              //         {moment(createdAt).format('h:mm a')},{' '}
              //         {moment(createdAt).format('DD/MM/YYYY')}
              //       </p>
              //     </div>

              //     <div className="approve">
              //       <h5>Successful</h5>
              //       <h4 className="amount">USD {format(amount)}</h4>
              //     </div>
              //   </div>
              // </article>
              <article key={_id} className="transfer">
                <h4 className="date">{date1}</h4>
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
              </article>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};
export default TransactionComponent;
