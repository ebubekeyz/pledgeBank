import { redirect } from 'react-router-dom';
import { Passport as Pass } from '../DashboardComponent';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Passport = () => {
  return (
    <div>
      <Pass />
    </div>
  );
};
export default Passport;
