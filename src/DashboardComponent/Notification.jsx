import { Form } from 'react-router-dom';
import { FormInput, SubmitBtn, TextAreaInput } from '../components';
import Wrapper from '../assets/DashboardWrapper/Notification';
import { customFetch } from '../utils';

export const action =
  (store) =>
  async ({ request }) => {
    const { user, notification } = store.getState().userState;
    const alert = document.querySelector('.form-alert');
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const id = Object.values(notification)[0]._id;
    console.log(id);
    try {
      const resp = await customFetch.patch(`/notification/${id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(resp.data.notification);
      alert.innerHTML = 'Notification Sent Successfully';
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
    return null;
  };

const Notification = () => {
  return (
    <Wrapper>
      <div>
        <div className="form-alert"></div>
        <h4>Notification Message</h4>
        <Form method="patch">
          <input type="text" name="status" defaultValue="pending" hidden />
          <FormInput type="text" name="name" placeholder="Name" />
          <FormInput type="text" name="subject" placeholder="Subject" />
          <TextAreaInput name="message" placeholder="Message" />

          <SubmitBtn text="send Message" />
        </Form>
      </div>
    </Wrapper>
  );
};
export default Notification;
