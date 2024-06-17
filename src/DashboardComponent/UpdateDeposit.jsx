import { Form, Link } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/AdminDeposit';
import { FormInput, SubmitBtn } from '../components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { customFetch } from '../utils';
import { FiEdit } from 'react-icons/fi';

export const action =
  (store) =>
  async ({ request }) => {
    const alert = document.querySelector('.form-alert');

    const formData = await request.formData();
    const { user, balance } = store.getState().userState;
    let data = Object.fromEntries(formData);

    data = {
      ...data,
      accountNumber: data.accountNumber,
      accountName: data.accountName,
      amount: data.amount,
      bank: data.bank,
      date1: data.date1,
      date2: data.date2,
    };

    try {
      const resp = await customFetch.patch(`/addFund/${data.add}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert.innerHTML = `Deposit Successful`;
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

const UpdateDeposit = () => {
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

  const { user, allUsers, allDeposit } = useSelector(
    (state) => state.userState
  );

  return (
    <Wrapper>
      <div className="deposit">
        <div className="form-alert"></div>
        <div className="sub-menu">
          <h4 style={{ textTransform: 'uppercase' }}>Update Deposit Money</h4>
          <Link to="/dashboard/updateUsers" className="editAccount">
            <FiEdit className="icon" />
            <h4>Update Users</h4>
          </Link>
        </div>
        <Form method="patch">
          <FormInput
            name="accountName"
            placeholder="Type a Name"
            type="text"
            label="Name"
            defaultValue={``}
          />

          <h4>User</h4>
          <div className="custom-select">
            <select name="user" id="ms" className="">
              {Object.values(allUsers).map((item) => {
                const { _id, firstName, lastName } = item;
                return (
                  <option key={_id} value={_id}>
                    {firstName} {lastName}
                  </option>
                );
              })}
            </select>
          </div>

          <h4>(Item to edit)</h4>
          {user.role === 'user' ? (
            ''
          ) : (
            <div className="custom-select">
              <select name="add" className="">
                {Object.values(allDeposit).map((item) => {
                  const { _id, accountName, amount } = item;
                  return (
                    <option key={_id} value={_id}>
                      {accountName}({amount})
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          <FormInput
            name="accountNumber"
            placeholder="Account Number"
            type="text"
            label="Account Number"
            defaultValue={user.accountNumber}
          />
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

          {user.role === 'admin' || user.role === 'owner' ? (
            <div className="">
              <FormInput
                placeholder="12th June 2024"
                name="date1"
                label="date1"
              />
              <FormInput
                placeholder="11:57am, 12/06/2024"
                name="date2"
                label="date2"
              />
            </div>
          ) : (
            ''
          )}
          <FormInput
            name="amount"
            placeholder="Amount"
            type="text"
            label="amount"
          />
          <SubmitBtn text="Update" />
        </Form>
      </div>
    </Wrapper>
  );
};
export default UpdateDeposit;
