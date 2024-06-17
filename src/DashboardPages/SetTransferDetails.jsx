import { redirect } from 'react-router-dom';
import { SetTransferDetails as SetTransfer } from '../DashboardComponent';
import { customFetch } from '../utils';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const SetTransferDetails = () => {
  return (
    <div>
      <SetTransfer />
    </div>
  );
};
export default SetTransferDetails;
