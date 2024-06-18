import { redirect, useLoaderData } from 'react-router-dom';
import { ChangePassword as Pass } from '../DashboardComponent';
import { customFetch } from '../utils';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const ChangePassword = () => {
  return (
    <div>
      <Pass />
    </div>
  );
};
export default ChangePassword;
