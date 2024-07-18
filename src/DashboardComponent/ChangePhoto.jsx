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
    console.log(passport);

    data = {
      ...data,
      passport: response.data.image.src,
    };

    try {
      const resp = await customFetch.patch(`/auth/${data.user2}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert.innerHTML = `Passport Updated Successfully`;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);

      return redirect('/dashboard/changePhoto');
    } catch (error) {
      const errorMessage = error.resp.data.msg || 'Error';
      alert.textContent = errorMessage;
      alert.style.textAlign = 'center';
      alert.style.color = 'var(--clr-primary-7)';
      alert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        alert.textContent = ``;
        alert.style.display = 'hidden';
        alert.style.background = 'none';
        alert.style.background = 'transparent';
      }, 3000);
      return null;
    }
    return null;
  };

const ChangePhoto = () => {
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

  let pass =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:7000'
      : 'https://pledgebank.onrender.com';

  return (
    <Wrapper>
      <div className="container" style={{ margin: '2rem 0' }}>
        <div className="form-alert"></div>
        <h4>Update Users</h4>
        <Form method="patch" encType="multipart/form-data">
          <div className="custom-select">
            <select name="user2" id="ms" className="">
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
export default ChangePhoto;
