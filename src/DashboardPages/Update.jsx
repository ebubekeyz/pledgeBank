import { UpdateWithdrawal } from '../DashboardComponent';
import { Link, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/AccountInfo';
import { useSelector } from 'react-redux';
import { FiEdit, FiLock } from 'react-icons/fi';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect('/login');
    }

    return null;
  };

const Update = () => {
  return (
    <Wrapper>
      <div className="account">
        <div className="sub-menu">
          <div className="editAccount">
            <h4 style={{ textTransform: 'uppercase' }}>Update Withdrawal</h4>
          </div>

          <Link to="/dashboard/updateDeposit" className="editAccount">
            <FiEdit className="icon" />
            <h4>Update Deposit</h4>
          </Link>
        </div>

        <UpdateWithdrawal />
      </div>
    </Wrapper>
  );
};
export default Update;
