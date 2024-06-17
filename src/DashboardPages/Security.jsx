import { redirect, useLoaderData } from 'react-router-dom';
import { Security as Secure } from '../DashboardComponent';
import { customFetch } from '../utils';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Security = () => {
  return (
    <div>
      <Secure />
    </div>
  );
};
export default Security;
