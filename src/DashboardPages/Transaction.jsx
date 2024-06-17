import { redirect } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Transact';
import moment from 'moment';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';
import { customFetch } from '../utils';
import {
  Filters,
  Pagination,
  TransactionComponent,
} from '../DashboardComponent';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect('/login');
    }
    let deposit = JSON.parse(localStorage.getItem('deposit'));
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await customFetch('/withdraw?sort=latest', {
      params,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const withdraw = response.data.withdraw;
    const meta = response.data.meta;

    return { withdraw, deposit, meta, params };
  };

const Transaction = () => {
  const { withdraw } = useSelector((state) => state.userState);

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const realWithdraw = Object.values(withdraw);

  return (
    <div style={{ marginBottom: '4rem' }}>
      {/* <Filters /> */}
      <TransactionComponent />
      {/* <Pagination /> */}
    </div>
  );
};
export default Transaction;
