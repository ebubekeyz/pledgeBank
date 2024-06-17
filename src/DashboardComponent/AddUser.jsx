import { useSelector } from 'react-redux';
import { Form, redirect } from 'react-router-dom';
import Wrapper from '../assets/Register';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { useEffect } from 'react';

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

    data = {
      ...data,
      accountOwnership: data.accountOwnership,
      address: data.address,
      country: data.country,
      dob: data.dob,
      email: data.email,
      firstName: data.firstName,
      gender: data.gender,
      idNumber: data.idNumber,
      identity: data.identity,
      lastName: data.lastName,
      maritalStatus: data.maritalStatus,
      occupation: data.occupation,
      phone: data.phone,
      typeOfAccount: data.typeOfAccount,
      passport: response.data.image.src,
      password: data.password,
      role: data.role,
    };

    console.log(data);
    try {
      const resp = await customFetch.post(`/auth/local/register`, data);
      alert.innerHTML = `User Added Successfully`;
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

const AddUser = () => {
  const { allUsers, user } = useSelector((state) => state.userState);
  const select = () => {
    let x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName('custom-select');
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName('select')[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement('DIV');
      a.setAttribute('class', 'select-selected');
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement('DIV');
      b.setAttribute('class', 'select-items select-hide');
      for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */
        c = document.createElement('DIV');
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener('click', function (e) {
          /* When an item is clicked, update the original select box,
        and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName('select')[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName('same-as-selected');
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute('class');
              }
              this.setAttribute('class', 'same-as-selected');
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener('click', function (e) {
        /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
      });
    }

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
  except the current select box: */
      var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName('select-items');
      y = document.getElementsByClassName('select-selected');
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove('select-arrow-active');
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add('select-hide');
        }
      }
    }

    /* If the user clicks anywhere outside the select box,
then close all select boxes: */
    document.addEventListener('click', closeAllSelect);
  };

  useEffect(() => {
    select();
  }, []);

  const findImage = Object.values(allUsers).find(
    (item) => item._id === user._id
  );

  let pass =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:7000'
      : 'https://pledgebank.onrender.com';
  // k
  return (
    <Wrapper>
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div className="form-alert"></div>
        <h4>Upload Passport</h4>
        <Form method="post" encType="multipart/form-data">
          <FormInput type="text" label="First Name" name="firstName" />
          <FormInput type="text" label="Last Name" name="lastName" />

          <FormInput type="email" name="email" label="Email" />
          <FormInput type="text" name="password" label="Password" />
          <FormInput type="text" label="ID Number" name="idNumber" />
          <FormInput type="text" label="Address" name="address" />
          <FormInput type="date" label="Date Of Birth" name="dob" />
          <FormInput type="text" label="Country" name="country" />
          <FormInput type="text" label="Phone" name="phone" />
          <FormInput type="text" label="Gender" name="gender" />
          <div className="custom-select">
            <select name="role" className="">
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="owner">Owner</option>
              <option value="user">user</option>
            </select>
          </div>
          <div className="custom-select">
            <select name="accountOwnership" className="">
              <option value="">Select Account Ownership</option>
              <option value="Individual">Individual</option>
              <option value="Joint Account">Joint Account</option>
              <option value="Trust Account">Trust Account</option>
            </select>
          </div>
          <div className="custom-select">
            <select name="maritalStatus" className="">
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Separated">Separated</option>
              <option value="Widowed">Widowed</option>
              <option value="Registered Partnership">
                Registered Partnership
              </option>
            </select>
          </div>
          <div className="custom-select">
            <select name="typeOfAccount" className="">
              <option value="">Select</option>
              <option value="Savings Account">Savings Account</option>
              <option value="Checking Account">Checking Account</option>
              <option value="Money Market Account">Money Market Account</option>
              <option value="Certificate Of Deposit Account">
                Certificate Of Deposit Account
              </option>
            </select>
          </div>
          <div className="custom-select">
            <select name="identity">
              <option value="">Select identity</option>
              <option value="Social Security Number">
                Social Security Number
              </option>
              <option value="Passport Number">Passport Number</option>
              <option value="Driver's License Number">
                Driver's License Number
              </option>
            </select>
          </div>
          <FormInput type="text" label="Occupation" name="occupation" />

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
export default AddUser;
