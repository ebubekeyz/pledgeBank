import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/SendMoney';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import FormInput from '../components/FormInput';
import { FormSelect, SubmitBtn } from '../components';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addWithdraw } from '../features/user/userSlice';

export const action =
  (store) =>
  async ({ request }) => {
    const alert = document.querySelector('.form-alert');
    const formData = await request.formData();
    const { user, balance } = store.getState().userState;
    const data = Object.fromEntries(formData);

    if (balance > 0) {
      try {
        const resp = await customFetch.post('/withdraw', data, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        alert.innerHTML = 'Successful';
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
    } else {
      alert.innerHTML = `Balance is too low for this transaction`;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);
    }
  };
const SendMoney = () => {
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

  //   window.addEventListener('DOMContentLoaded', () => {
  //     select();
  //   });
  useEffect(() => {
    select();
  }, []);

  const user = useSelector((state) => state.userState.user);
  const [show, setShow] = useState(false);

  const handleConfirm = () => {
    const name = document.querySelector('#senderName');
    const inputShow = document.querySelector('.input-show');
    const confirmBtn = document.querySelector('.confirm-btn');
    const alert = document.querySelector('.form-alert');
    const ms = document.querySelector('#ms').value;
    const acc = document.querySelector('#acc').value;
    console.log(acc);

    if (acc !== '' && acc === '222' && ms === 'Wells Fargo Bank') {
      inputShow.classList.add('show');
      name.value = 'Matheus Philip';
      confirmBtn.style.display = 'none';
      setShow(true);
    } else {
      alert.innerHTML = `Sorry you cannot transfer at the moment. Please contact Support team to resolve this issue`;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <div className="form-alert"></div>

      <Form method="post" className="form">
        <article className="from">
          <h4>Transfer From:</h4>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <div className="acc-details">
            <p>{user.typeOfAccount}:</p>
            <p>{user.accountNumber}</p>
          </div>
        </article>

        <div className="custom-select">
          <select name="bank" id="ms" className="">
            <option value="Choose Bank">Choose Bank</option>
            <option value="Bank Of America">Bank Of America</option>
            <option value="Capital One">Capital One</option>
            <option value="Chase Bank (Jp Morgan Chase)">
              Chase Bank (Jp Morgan Chase)
            </option>
            <option value="Citibank">Citibank</option>
            <option value="Fifth Third Bank">Fifth Third Bank</option>
            <option value="HSBC">HSBC</option>
            <option value="PNC Bank">PNC Bank</option>
            <option value="Santander">Santander</option>
            <option value="Truist Bank">Truist Bank</option>
            <option value="U.S. Bancorp">U.S. Bancorp</option>
            <option value="USAA">USAA</option>
            <option value="Wells Fargo Bank">Wells Fargo Bank</option>
          </select>
        </div>

        <article className="to">
          <div>
            <h4>Transfer To:</h4>
            <FormInput
              placeholder="Beneficiary Account Number"
              name="accountNumber"
              id="acc"
            />

            <div className="input-show" style={{ width: '100%' }}>
              <FormInput name="accountName" id="senderName" />
            </div>
          </div>
        </article>

        <span onClick={handleConfirm} className="btn confirm-btn">
          Confirm Receiver
        </span>

        {show ? (
          <div>
            <FormInput placeholder="Amount" name="amount" />

            <FormInput placeholder="Narration" name="narration" />

            <SubmitBtn text="Transfer" />
          </div>
        ) : (
          ''
        )}
      </Form>
    </Wrapper>
  );
};
export default SendMoney;

// https://app.jivosite.com/join.html?token=30c2596d551d2e63ac6a12b06f1fd482.2462834
