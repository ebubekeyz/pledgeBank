import { UpdateWithdrawal } from '../DashboardComponent';
import { Link, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/AccountInfo';
import { useSelector } from 'react-redux';
import { FiEdit, FiLock } from 'react-icons/fi';
import { UpdateUsers as Update } from '../DashboardComponent';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect('/login');
    }

    return null;
  };

const UpdateUsers = () => {
  return (
    <div>
      <Update />
    </div>
  );
};
export default UpdateUsers;
