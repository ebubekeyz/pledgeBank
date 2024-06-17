import { redirect } from 'react-router-dom';
import { SendMoney as Send } from '../DashboardComponent';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const SendMoney = () => {
  return (
    <>
      <Send />
    </>
  );
};
export default SendMoney;
