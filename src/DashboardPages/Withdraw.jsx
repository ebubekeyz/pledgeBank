import { redirect } from 'react-router-dom';
import { Withdraw as With } from '../DashboardComponent';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Withdraw = () => {
  return (
    <>
      <With />
    </>
  );
};
export default Withdraw;
