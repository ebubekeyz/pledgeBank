import { redirect } from 'react-router-dom';
import { Notification } from '../DashboardComponent';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }
  return null;
};

const NotificationMessage = () => {
  return (
    <div style={{ margin: '2rem 0' }}>
      <Notification />
    </div>
  );
};
export default NotificationMessage;
