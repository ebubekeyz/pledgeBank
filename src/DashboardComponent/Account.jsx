import { Form, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Account';
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
      const resp = await customFetch.patch(`/auth/${user._id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert.innerHTML = `Account Updated Successfully`;
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

const Account = () => {
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

  const { singleUser } = useLoaderData();

  return (
    <Wrapper>
      <div className="form-alert"></div>
      <Form method="patch" className="account">
        <h4>General Settings</h4>
        <FormInput
          name="firstName"
          placeholder="First Name"
          type="text"
          defaultValue={singleUser.firstName}
        />
        <FormInput
          name="lastName"
          placeholder="Last Name"
          type="text"
          defaultValue={singleUser.lastName}
        />

        <FormInput
          name="email"
          placeholder="Email"
          type="email"
          defaultValue={singleUser.email}
        />

        <FormInput
          name="country"
          placeholder="Country"
          type="text"
          defaultValue={singleUser.country}
        />

        <FormInput
          name="gender"
          placeholder="Gender"
          type="text"
          defaultValue={singleUser.gender}
        />

        <FormInput
          name="address"
          placeholder="Address"
          type="text"
          defaultValue={singleUser.address}
        />

        <FormInput
          name="noc"
          placeholder="Number of Children"
          type="text"
          defaultValue={singleUser.noc || ''}
        />

        <FormInput
          name="dob"
          placeholder="12/05/1998"
          type="text"
          defaultValue={singleUser.dob}
        />

        <FormInput
          name="maritalStatus"
          placeholder="Marital Status"
          type="text"
          defaultValue={singleUser.maritalStatus || ''}
        />

        <FormInput
          name="occupation"
          placeholder="Occupation"
          type="text"
          defaultValue={singleUser.occupation || ''}
        />

        <SubmitBtn text="save" />
      </Form>
    </Wrapper>
  );
};
export default Account;
