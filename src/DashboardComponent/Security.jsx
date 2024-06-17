import { Form, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Security';
import { FormInput, SubmitBtn } from '../components';
import { useEffect } from 'react';
import { customFetch } from '../utils';

export const action =
  (store) =>
  async ({ request }) => {
    const alert = document.querySelector('.form-alert');
    const formData = await request.formData();
    const { user } = store.getState().userState;
    const data = Object.fromEntries(formData);

    try {
      const resp = await customFetch.patch(`/auth/updatePassword`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert.innerHTML = `Password Updated Successfully`;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);

      return null;
    } catch (error) {
      const errorMessage =
        error?.resp?.data?.msg || 'please double check your credentials';
      console.log(errorMessage);
      alert.innerHTML = errorMessage;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);

      return null;
    }
  };

const Security = () => {
  return (
    <Wrapper>
      <div className="form-alert"></div>
      <Form method="patch" className="account">
        <h4>Security Settings</h4>
        <FormInput
          name="oldPassword"
          placeholder="Old Password"
          type="password"
        />
        <FormInput
          name="newPassword"
          placeholder="New Password"
          type="password"
        />

        <SubmitBtn text="save" />
      </Form>
    </Wrapper>
  );
};
export default Security;
