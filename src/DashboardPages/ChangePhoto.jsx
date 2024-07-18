import { redirect, useLoaderData } from 'react-router-dom';
import { ChangePhoto as Change } from '../DashboardComponent';
import { customFetch } from '../utils';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const ChangePhoto = () => {
  return (
    <div>
      <Change />
    </div>
  );
};
export default ChangePhoto;
