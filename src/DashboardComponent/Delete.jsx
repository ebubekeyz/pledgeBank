import { useEffect, useState } from 'react';
import Wrapper from '../assets/DashboardWrapper/Transact';
import { useSelector } from 'react-redux';
import { customFetch } from '../utils';

const Delete = () => {
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

    document.addEventListener('click', closeAllSelect);
  };

  useEffect(() => {
    select();
  }, []);

  const { user, allUsers } = useSelector((state) => state.userState);
  const [submitting, setSubmitting] = useState('Delete');
  const [user1, setUser1] = useState({
    id: '',
  });

  const deleteSingleUser = async (e) => {
    const formAlert = document.querySelector('.form-alert');
    e.preventDefault();
    setSubmitting('Deleting User ....');

    console.log(e.target.user2.value);

    setUser1({
      id: e.target.user2.value,
    });
    try {
      const resp = await customFetch.delete(`/auth/${user1.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setSubmitting('User Deleted');
    } catch (error) {
      console.log(error);
      setSubmitting('Delete');
      formAlert.textContent = 'Error';
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <div>
        <div className="form-alert"></div>
        <div className="transact">
          <div className="sub-menu">
            <div className="editAccount">
              <h4>Delete Single User</h4>
            </div>
          </div>
          <form onSubmit={deleteSingleUser} className="transfer">
            <div className="inner-transfer-cont">
              <div className="details">
                {/* <span className="label">Select User you want to Delete</span> */}
                <div className="custom-select">
                  <select name="user2" onChange={deleteSingleUser} className="">
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
              </div>

              <div className="approve">
                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: 'var(--red-dark)',
                    color: 'var(--clr-white)',
                  }}
                >
                  {submitting}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Delete;
