import { redirect } from 'react-router-dom';
import { UpdateDeposit as Update } from '../DashboardComponent';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      return redirect('/login');
    }

    return null;
  };

const UpdateDeposit = () => {
  return (
    <div>
      <Update />
    </div>
  );
};
export default UpdateDeposit;
