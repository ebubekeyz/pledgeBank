import { useSelector } from 'react-redux';
import { Form, redirect } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Passport';
import { SubmitBtn } from '../components';
import { customFetch } from '../utils';

export const action =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    const alert = document.querySelector('.form-alert');

    const formData = await request.formData();
    let data = Object.fromEntries(formData);

    const formData2 = new FormData();

    formData2.append('image', data.passport);

    const response = await customFetch.post('/upload', formData2);

    let passport = response.data.image.src;
    console.log(passport);
    data = { ...data, passport: passport };

    try {
      const resp = await customFetch.patch(`/auth/${user._id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert.innerHTML = `Passport Uploaded Successfully`;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);
      return null;
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.resp?.data?.error?.message || 'Something went wrong';
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

const Passport = () => {
  const { user, allUsers } = useSelector((state) => state.userState);
  const findImage = Object.values(allUsers).find(
    (item) => item._id === user._id
  );

  let pass =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:7000'
      : 'https://pledgebank.onrender.com';

  return (
    <Wrapper>
      <div className="container">
        <div className="form-alert"></div>
        <h4>Upload Passport</h4>
        <Form method="patch" encType="multipart/form-data">
          <div className="passport">
            <img
              src={`${pass}/${findImage.passport}`}
              alt="passport"
              className="pass"
            />
          </div>

          <div className="upload">
            {/* start */}

            <div className="mb-6 pt-4">
              <div className="formbold-mb-5 formbold-file-input">
                <input type="file" name="passport" id="file" />
              </div>
            </div>

            <div>
              <button className="formbold-btn w-full">Upload Passport</button>
            </div>
            {/* end */}
          </div>

          <SubmitBtn text="save" />
        </Form>
      </div>
    </Wrapper>
  );
};
export default Passport;
