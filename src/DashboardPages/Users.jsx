import { redirect } from 'react-router-dom';

export const loader = (store) => async () => {
  const user = store.getState.userState.user;
  if (!user) {
    return redirect('/login');
  }
  return null;
};

const Users = () => {
  return <div>Users</div>;
};
export default Users;
