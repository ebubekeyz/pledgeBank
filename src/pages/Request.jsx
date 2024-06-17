import { Form } from 'react-router-dom';
import Wrapper from '../assets/Form';
import { useEffect, useState } from 'react';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data.info);

  return null;
};

const Request = () => {
  const handleTab = (e) => {
    const about = document.querySelector('.about');
    const btns = document.querySelectorAll('.btn');
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

  function select() {
    var x, i, j, l, ll, selElmnt, a, b, c;
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
  }

  useEffect(() => {
    select();
  }, []);

  const validate1 = () => {
    const name = document.querySelector('#name').value;
    const companyName = document.querySelector('#companyName').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const data = document.querySelector('#btn1');
    const formAlert = document.querySelector('#form-alert');
    const rangeValue = document.querySelector('#range-value');
    const rangeText = document.querySelector('#range-text');

    if (!name || !email || !companyName || !phone) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.color = `var(--clr-grey-1)`;
      formAlert.style.visibility = 'visible';
      formAlert.style.letterSpacing = '0.09rem';
      formAlert.style.background = 'var(--clr-primary-8)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      rangeValue.classList.add('value-20');
      rangeText.classList.add('skill-text-20');
      rangeText.textContent = '20%';
      data.dataset.id = 'vision';
      formAlert.style.background = 'var(--clr-primary-8)';
      formAlert.textContent = `Briefly describe your order and clearly state the services you render`;
      formAlert.style.color = `green`;
      formAlert.style.display = 'visible';
      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <section className="section">
        <div className="title">
          <h2>Request Form</h2>
        </div>

        <div className="skill">
          <div className="skill-container">
            <div className="skill-value" id="range-value"></div>
            <p className="skill-text" id="range-text">
              0%
            </p>
          </div>
        </div>
        <Form
          method="post"
          encType="multipart/form-data"
          className="task-form about-center section-center"
        >
          <div className="form-alert" id="form-alert"></div>

          <article onClick={handleTab} className="about">
            <div className="about-content">
              {/* <!-- single item  */}
              <div className="content active" id="history">
                <h4>history</h4>
                <div className="form-control">
                  {/* <label htmlFor="name">Name:</label> */}
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="task-input"
                    placeholder="Name"
                  />

                  {/* <label htmlFor="name">Company Name:</label> */}
                  <input
                    id="companyName"
                    type="text"
                    name="companyName"
                    className="task-input"
                    placeholder="Company name"
                  />

                  {/* <label htmlFor="name">Email:</label> */}
                  <input
                    id="email"
                    type="email"
                    name="Company email"
                    className="task-input"
                    placeholder="Company Email"
                  />

                  {/* <label htmlFor="name">Phone Number:</label> */}
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className="task-input"
                    placeholder="Phone Number"
                  />

                  <button onClick={validate1} className="btn" id="btn1">
                    next
                  </button>
                </div>
              </div>
              {/* <!-- end of single item  */}
              {/* <!-- single item  */}
              <div className="content" id="vision">
                <h4>vision</h4>
                <div className="form-control">
                  {/* <textarea name="" placeholder="About your company"></textarea>
                  <textarea
                    name=""
                    placeholder="Service Description"
                  ></textarea> */}

                  {/* <div className="custom-select">
                    <select>
                      <option value="select">Do you have a logo?</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div> */}

                  <div>
                    <p className="quest">Do you have a logo? (If Yes upload)</p>

                    <label for="file-upload" className="custom-file-upload">
                      Upload Logo
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      accept="image/*"
                      multiple
                      name="logo"
                    />
                  </div>

                  <div>
                    <p className="quest">
                      Upload pdf of your services and company's info.
                    </p>

                    <label for="file-upload" className="custom-file-upload">
                      Upload Files
                    </label>
                    <input type="file" id="file-upload" multiple name="info" />
                  </div>

                  <div className="btn-cont">
                    <button className="btn active" data-id="history">
                      back
                    </button>
                    <button className="btn" data-id="goals">
                      next
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- end of single item  */}
              {/* <!-- single item  */}
              <div className="content" id="goals">
                <h4>goals</h4>
                <div className="form-control">
                  {/* <input type="file" style={{ borderBottom: 'none' }} /> */}

                  <div className="btn-cont">
                    <button className="btn" data-id="vision">
                      back
                    </button>
                    <button type="submit" className="btn submit-btn">
                      submit
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- end of single item  */}
            </div>
          </article>
        </Form>
      </section>
    </Wrapper>
  );
};
export default Request;
