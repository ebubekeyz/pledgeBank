import { redirect } from 'react-router-dom';
import { AdminDeposit as Deposit } from '../DashboardComponent';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const AdminDeposit = () => {
  return (
    <div>
      <Deposit />
    </div>
  );
};
export default AdminDeposit;
