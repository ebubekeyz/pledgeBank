import { redirect, useLoaderData, useLocation } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Notification';
import { customFetch } from '../utils';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Notification = () => {
  const { notification } = useSelector((state) => state.userState);

  if (Object.values(notification).length === 0) {
    return (
      <div
        style={{
          margin: '2rem 0',
          borderBottom: '2px solid var(--clr-grey-5)',
          padding: '0.5rem 0',
        }}
      >
        <h4>You dont have any Notification</h4>
      </div>
    );
  }

  return (
    <Wrapper>
      <div style={{ margin: '2rem 0' }} className="notice">
        {Object.values(notification).map((item) => {
          const { _id, name, subject, message } = item;
          return (
            <article key={_id} className="transfer">
              <h4 className="date" style={{ marginBottom: '0' }}>
                {subject}
              </h4>

              <div className="inner-transfer-cont">
                <div className="details">
                  <p style={{ marginTop: '0' }}>{message}</p>
                </div>

                <div className="approve" style={{ textAlign: 'right' }}>
                  <h5>Customer Success Team,</h5>
                  <h5>{name}</h5>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Notification;
