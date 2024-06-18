import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/Register';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { FaArrowCircleDown } from 'react-icons/fa';
import FormInput from '../components/FormInput';
import { FormSelect, SubmitBtn } from '../components';
import { useEffect } from 'react';

export const action =
  (store) =>
  async ({ request }) => {
    const formAlert = document.querySelector('#form-alert');
    const formData = await request.formData();
    let data = Object.fromEntries(formData);
    console.log(data);

    try {
      const response = await customFetch.post('/auth/local/register', data);
      formAlert.textContent = `successful`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
      return redirect('/login');
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.data.msg || 'Registration Failed';
      formAlert.textContent = errorMessage;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
      }, 3000);
      return null;
    }
  };

const Register = () => {
  const handleTab = (e) => {
    const about = document.querySelector('.about');
    const btns = document.querySelectorAll('.tab-btn');
    const articles = document.querySelectorAll('.content');
    const id = e.target.dataset.id;

    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  };

  const validate1 = () => {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;

    const data = document.querySelector('#btn1');
    const password = document.querySelector('#password').value;
    const formAlert = document.querySelector('#form-alert');

    if (!firstName || !lastName || !password) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      data.dataset.id = 'vision';
    }
  };
  const validate2 = () => {
    const address = document.querySelector('#address').value;
    const email = document.querySelector('#email').value;
    const idNumber = document.querySelector('#idNumber').value;
    const data = document.querySelector('#btn2');
    const formAlert = document.querySelector('#form-alert');

    if (!email || !address || !idNumber) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      data.dataset.id = 'vision2';
    }
  };

  const validate3 = () => {
    const country = document.querySelector('#country').value;
    const dob = document.querySelector('#dob').value;
    const phone = document.querySelector('#phone').value;
    const data = document.querySelector('#btn3');
    const formAlert = document.querySelector('#form-alert');

    if (!country || !dob || !phone) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      data.dataset.id = 'goals';
    }
  };

  const validate4 = () => {
    const ao = document.querySelector('#ao').value;
    const ms = document.querySelector('#ms').value;
    const toa = document.querySelector('#toa').value;
    const data = document.querySelector('#btn4');
    const formAlert = document.querySelector('#form-alert');

    if (!ao || !ms || !toa) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      data.dataset.id = 'goals2';
    }
  };

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
  }, [validate3]);
  return (
    <Wrapper>
      <section className="login-section">
        <div className="about-center section-center">
          <Form
            method="post"
            onClick={handleTab}
            className="about form-control"
          >
            <div className="form-alert" id="form-alert"></div>
            {/* <!-- btn container  */}
            <div className="logo">
              <img src="/logo.png" alt="logo" className="logo-img" />
              <h4>Create an Account</h4>
            </div>
            <div className="about-content">
              {/* <!-- single item  */}
              <div className="content active" id="history">
                <FormInput
                  type="text"
                  label="First Name"
                  name="firstName"
                  id="firstName"
                />
                <FormInput
                  type="text"
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                />
                <FormInput
                  type="password"
                  label="Password"
                  name="password"
                  id="password"
                />

                <span onClick={validate1} className="btn reg-btn" id="btn1">
                  next
                </span>
              </div>

              <div className="content" id="vision">
                <FormInput type="email" name="email" label="Email" id="email" />

                <FormInput
                  type="text"
                  label="ID Number"
                  name="idNumber"
                  id="idNumber"
                />
                <FormInput
                  type="text"
                  label="Address"
                  name="address"
                  id="address"
                />

                <div className="btn-cont">
                  <span className="btn reg-btn active" data-id="history">
                    back
                  </span>
                  <span className="btn reg-btn" onClick={validate2} id="btn2">
                    next
                  </span>
                </div>
              </div>

              <div className="content" id="vision2">
                <FormInput
                  type="date"
                  label="Date Of Birth"
                  name="dob"
                  id="dob"
                />
                <FormInput
                  type="text"
                  label="Country"
                  name="country"
                  id="country"
                />
                <FormInput type="text" label="Phone" name="phone" id="phone" />
                <div className="btn-cont">
                  <span className="btn reg-btn active" data-id="vision">
                    back
                  </span>
                  <span className="btn reg-btn" onClick={validate3} id="btn3">
                    next
                  </span>
                </div>
              </div>

              <div className="content" id="goals">
                <div className="custom-select">
                  <select name="accountOwnership" id="ao" className="">
                    <option value="Select">Select Account Ownership</option>
                    <option value="Individual">Individual</option>
                    <option value="Joint Account">Joint Account</option>
                    <option value="Trust Account">Trust Account</option>
                  </select>
                </div>

                <div className="custom-select">
                  <select name="maritalStatus" id="ms" className="">
                    <option value="Select">Select Marital Status</option>
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
                  <select name="typeOfAccount" id="toa" className="">
                    <option value="Select">Select Account Type</option>
                    <option value="Savings Account">Savings Account</option>
                    <option value="Checking Account">Checking Account</option>
                    <option value="Money Market Account">
                      Money Market Account
                    </option>
                    <option value="Certificate Of Deposit Account">
                      Certificate Of Deposit Account
                    </option>
                  </select>
                </div>

                <div className="btn-cont">
                  <span className="btn reg-btn active" data-id="vision2">
                    back
                  </span>
                  <span className="btn reg-btn" onClick={validate4} id="btn4">
                    next
                  </span>
                </div>
              </div>

              <div className="content" id="goals2">
                <div className="custom-select">
                  <select name="identity" id="identity" className="">
                    <option value="Select">Select Identity</option>
                    <option value="Social Security Number">
                      Social Security Number
                    </option>
                    <option value="Passport Number">Passport Number</option>
                    <option value="Driver's License Number">
                      Driver's License Number
                    </option>
                  </select>
                </div>
                <FormInput
                  type="text"
                  label="Occupation"
                  name="occupation"
                  id="occupation"
                />

                <button className="btn reg-btn active" data-id="goals">
                  back
                </button>
                <SubmitBtn text="register" />
              </div>
            </div>
            <Link
              to="/login"
              className="link"
              style={{ color: 'var(--clr-grey-6)', fontSize: '0.9rem' }}
            >
              Login if you already have an account
            </Link>
          </Form>
        </div>
      </section>
    </Wrapper>
  );
};
export default Register;
