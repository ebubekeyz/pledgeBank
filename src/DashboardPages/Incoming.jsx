import moment from 'moment';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/DashboardWrapper/Transact';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
const Incoming = () => {
  let deposit = JSON.parse(localStorage.getItem('deposit'));

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Wrapper>
      <div className="transact">
        <div className="sub-menu">
          <div className="editAccount">
            <h4>Outgoing</h4>
          </div>

          <div className="btn security">Incoming</div>
        </div>
        {Object.values(deposit).map((item) => {
          const { createdAt, amount, accountName, _id } = item;

          return (
            <article key={_id} className="transfer">
              <h4 className="date">
                {moment(createdAt).format('Do MMMM YYYY')}
              </h4>
              <div className="inner-transfer-cont">
                <div className="details">
                  <h4 className="name">Transfer from {accountName}</h4>
                  <p>
                    {moment(createdAt).format('h:mm a')},{' '}
                    {moment(createdAt).format('DD/MM/YYYY')}
                  </p>
                </div>

                <div className="approve">
                  <h5>Approved</h5>
                  <h4 className="amount">USD {format(amount)}</h4>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Incoming;
