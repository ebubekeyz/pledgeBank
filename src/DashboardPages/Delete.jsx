import { redirect } from 'react-router-dom';
import { Delete as Del } from '../DashboardComponent';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }
  return null;
};

const Delete = () => {
  return (
    <div style={{ margin: '2rem 0' }}>
      <Del />
    </div>
  );
};
export default Delete;
