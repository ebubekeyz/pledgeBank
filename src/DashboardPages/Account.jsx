import { redirect, useLoaderData } from 'react-router-dom';
import { Account as Acc } from '../DashboardComponent';
import { customFetch } from '../utils';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  try {
    const resp = await customFetch.get(
      `/auth/${user._id}`,

      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const singleUser = resp.data.user;

    return { singleUser };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Account = () => {
  return (
    <div>
      <Acc />
    </div>
  );
};
export default Account;
