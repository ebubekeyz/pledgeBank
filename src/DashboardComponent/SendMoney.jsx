import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/SendMoney';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import FormInput from '../components/FormInput';
import { FormSelect, SubmitBtn } from '../components';
import { FaArrowCircleDown, FaTimes } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addWithdraw } from '../features/user/userSlice';
import Alert from './Alert';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';
import moment from 'moment';

export const action =
  (store) =>
  async ({ request }) => {
    const formAlert = document.querySelector('.form-alert');
    const name = document.querySelector('#name');
    const amount = document.querySelector('#amount');
    const bank = document.querySelector('#bank');
    const account = document.querySelector('#account');
    const name2 = document.querySelector('#accname');
    const bank2 = document.querySelector('#accbank');
    const desc = document.querySelector('#accdesc');
    const num = document.querySelector('#accnum');
    const deb = document.querySelector('#accdeb');
    const date = document.querySelector('#accdate');
    const amt = document.querySelector('#accamt');
    const legBal = document.querySelector('#acclegbal');
    const bal = document.querySelector('#accbal');
    const popup = document.querySelector('.popup');
    const format = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const formData = await request.formData();
    const { user, balance } = store.getState().userState;
    const data = Object.fromEntries(formData);

    const balanceMain = JSON.parse(localStorage.getItem('bal'));

    if (balance > data.amount) {
      try {
        const resp = await customFetch.post('/withdraw', data);
        // popup.classList.add('showPopup');

        const withdraw2 = resp.data.attributes;
        name.textContent = withdraw2.accountName;
        bank.textContent = withdraw2.bank;
        amount.textContent = `USD ${format(withdraw2.amount)}`;
        account.textContent = withdraw2.accountNumber;
        name2.textContent = withdraw2.accountName;
        bank2.textContent = withdraw2.bank;
        amt.textContent = `USD ${format(withdraw2.amount)}`;
        desc.textContent = withdraw2.narration;
        deb.textContent = 'Debit';
        num.textContent = withdraw2.accountNumber;
        date.textContent = `${moment(withdraw2.createdAt).format(
          'Do MMMM YYYY'
        )}, ${moment(withdraw2.createdAt).format('h:mm a')}`;

        if (balanceMain !== null) {
          const ledgerBalance = Number(balanceMain.bal) - withdraw2.amount;
          console.log(ledgerBalance);
          bal.textContent = `USD ${format(ledgerBalance)}`;
          legBal.textContent = `USD ${format(Number(balanceMain.bal))}`;
        }

        return null;
      } catch (error) {
        console.log(error);
        const errorMessage = error.resp.data.msg || 'Error';
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
    } else {
      formAlert.innerHTML = `Balance is too low for this transaction`;
      formAlert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        formAlert.innerHTML = '';
        formAlert.style.background = 'none';
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

  const navigate = useNavigate();
  const { user, account, allUsers } = useSelector((state) => state.userState);

  const id = Object.values(account)[0]._id;
  const status = Object.values(account)[0].status;
  const accountNumber = Object.values(account)[0].accountNumber;
  const accountName = Object.values(account)[0].name;
  const routeNumber = Object.values(account)[0].routingNumber;

  const [show, setShow] = useState(false);

  const length = Object.values(account).length - 1;
  const mainAccount = Object.values(account);

  const close = () => {
    const alertImg = document.querySelector('.alert-img');
    alertImg.classList.remove('show2');
    window.location.reload();
  };
  const ok = () => {
    const alertImg = document.querySelector('.alert-img');
    alertImg.classList.remove('show2');
    return window.location.reload();
  };

  const handleConfirm = () => {
    const name = document.querySelector('#senderName');
    const inputShow = document.querySelector('.input-show');
    const confirmBtn = document.querySelector('.confirm-btn');
    const alert = document.querySelector('.form-alert');
    const routingNumber = document.querySelector('#routingNumber').value;
    const acctName = document.querySelector('#senderName');
    const ms = document.querySelector('#ms').value;
    const acc = document.querySelector('#acc').value;

    if (acc !== '' && routingNumber !== '' && acc === accountNumber && routingNumber === routeNumber ) {
      inputShow.classList.add('show');
      acctName.value = accountName;
      confirmBtn.style.display = 'none';
      setShow(true);
    } else {
      alert.innerHTML = `Invalid Account Number or Routing Number`;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);
    }
  };

  // const doc = new jsPDF()

  const receiptRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });
    // adding font
    doc.setFont('Inter-Regular', 'normal');

    doc.html(receiptRef.current, {
      async callback(doc) {
        await doc.save('receipt');
      },
    });
  };

  const nav = useNavigate();
  const clickPin = async () => {
    const popup = document.querySelector('.popup');
    const pin = document.querySelector('#pin').value;
    const alertImg = document.querySelector('.alert-img');
    const alert = document.querySelector('.form-alert');
    const msg = document.querySelector('.msg');
    const msg1 = document.querySelector('.msg1');

    if (pin === mainAccount[length].pin && status === 'false') {
      popup.classList.remove('showPopup');
      msg1.style.display = 'block';

      const resp = await customFetch.patch(
        `/account/${id}`,
        { status: 'true' },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
    } else {
      msg.style.display = 'block';

      setTimeout(() => {
        msg.style.display = 'none';
        popup.classList.remove('showPopup');
      }, 20000);
    }
  };

  const openTransfer = () => {
    const popup = document.querySelector('.popup');
    popup.classList.add('showPopup');
  };

  const closeNotice = () => {
    const msg = document.querySelector('.msg');
    msg.style.display = 'none';
    return window.location.reload();
  };
  return (
    <Wrapper>
      <div className="">
        <div className="form-alert"></div>
        <div className="alert-main"></div>

        <div className="msg1">
          <div className="msg1-cont">
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <FaTimes className="inline" onClick={closeNotice} />
            </div>
            <h1
              style={{
                fontSize: '1rem',
                letterSpacing: '0rem',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginBottom: '2rem',
                color: 'green',
              }}
            >
              Transaction Successful
            </h1>
          </div>
          <div className="trans">
            <article className="trans-inner" style={{ paddingTop: '1.5rem' }}>
              <h3 className="title">Account Name</h3>
              <h3 className="text" id="accname"></h3>
            </article>
            <article className="trans-inner">
              <h3 className="title">Account Number</h3>
              <h3 className="text" id="accnum"></h3>
            </article>
            <article className="trans-inner">
              <h3 className="title">Bank Name</h3>
              <h3 className="text" id="accbank"></h3>
            </article>
            <article className="trans-inner">
              <h3 className="title">Credit/Debit</h3>
              <h3 className="text" id="accdeb"></h3>
            </article>
            <article className="trans-inner">
              <h3 className="title">Description</h3>
              <h3 className="text" id="accdesc"></h3>
            </article>
            <article className="trans-inner">
              <h3 className="title">Date/Time</h3>
              <h3 className="text" id="accdate"></h3>
            </article>
            <article className="trans-inner">
              <h3 className="title">Amount</h3>
              <h3 className="text" id="accamt"></h3>
            </article>
            <article className="trans-inner">
              <h3 className="title">Ledger Balance</h3>
              <h3 className="text" id="acclegbal"></h3>
            </article>
            <article
              className="trans-inner"
              style={{
                background: 'var(--clr-primary-4',
                paddingTop: '1rem',
                color: 'white',
              }}
            >
              <h3 className="title">Balance</h3>
              <h3 className="text" id="accbal"></h3>
            </article>
          </div>
        </div>

        <div className="msg">
          <div style={{ textAlign: 'center', color: 'red' }}>
            <h1 style={{ letterSpacing: '0rem' }}>Transaction Failed</h1>
          </div>
          <div className="cont">
            <h1 style={{ letterSpacing: '0rem', textAlign: 'center' }}>
              Account Suspension Notice!!
            </h1>
            <FaTimes className="inline" onClick={closeNotice} />
          </div>
          <p>
            Your account has been suspended and you cannot initiate any
            transfers at this time. Please contact customer care for assistance.
            Thank you for your understanding.
          </p>
        </div>
        <div ref={receiptRef} className="alert-img">
          <div className="close-btn" onClick={close}>
            <FaTimes className="close" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/logo.png"
              style={{
                width: '10rem',
                marginRight: '1rem',
                texeAlign: 'center',
              }}
              alt="logo"
            />
          </div>

          <div className="c-img">
            <img
              src="/confirmed2.png"
              className="confirmed-img"
              style={{ width: '5rem', margin: '0 auto' }}
              alt="confirmed"
            />
          </div>
          <h4 style={{ textAlign: 'center', margin: '0 auto' }}>Success</h4>

          <p
            style={{
              marginBottom: '0',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <span>Name:</span>
            <span
              className="bold"
              style={{
                textTransform: 'capitalize',
                color: 'var(--clr-primary-2)',
              }}
              id="name"
            >
              {' '}
            </span>
          </p>
          <p
            style={{
              marginBottom: '0',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <span>Amount:</span>
            <span
              className="bold"
              style={{
                textTransform: 'capitalize',
                color: 'var(--clr-primary-2)',
              }}
              id="amount"
            >
              {' '}
            </span>
          </p>
          <p
            style={{
              marginBottom: '0',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <span>Bank Name: </span>
            <span
              className="bold"
              style={{
                textTransform: 'capitalize',
                color: 'var(--clr-primary-2)',
              }}
              id="bank"
            ></span>
          </p>
          <p
            style={{
              marginBottom: '0',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <span>Account Number:</span>{' '}
            <span
              className="bold"
              style={{
                textTransform: 'capitalize',
                color: 'var(--clr-primary-2)',
              }}
              id="account"
            ></span>
          </p>

          <button onClick={ok} className="btn confirmed-btn">
            OK
          </button>
          <button onClick={handleGeneratePdf} className="btn share-btn">
            <FiDownload />
          </button>
        </div>

        <Form method="post" className="form">
          <h4 className="title">Send Money</h4>
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

               <FormInput
                placeholder="Routing Number"
                name="routingNumber"
                id="routingNumber"
              />

              <div className="input-show" style={{ width: '100%' }}>
                <FormInput
                  name="accountName"
                  id="senderName"
                  placeholder="Account Name"
                />
              </div>
            </div>
          </article>

          <span onClick={handleConfirm} className="btn confirm-btn">
            Confirm Receiver
          </span>

          {user.role === 'user' ? (
            <input type="text" name="user" defaultValue={user._id} hidden />
          ) : (
            <div style={{ marginTop: '1rem' }}>
              <span className="label">To</span>
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
            </div>
          )}

          {user.role === 'admin' || user.role === 'owner' ? (
            <div className="">
              <FormInput
                placeholder="12th June 2024"
                name="date1"
                label="Date1"
              />
              <FormInput
                placeholder="11:57am, 12/06/2024"
                name="date2"
                label="Date2"
              />
            </div>
          ) : (
            <div>
              <input
                type="text"
                name="date1"
                defaultValue={moment().format('Do MMMM YYYY')}
                hidden
              />
              <input
                type="text"
                name="date2"
                defaultValue={moment().format('hh:mm a, DD/MM/YYYY')}
                hidden
              />
            </div>
          )}

          <input type="text" name="user" defaultValue={user._id} hidden />
          {show ? (
            <div>
              <FormInput placeholder="Amount" name="amount" />

              <FormInput placeholder="Narration" name="narration" />

              <div className="">
                <span className="transfer-btn" onClick={openTransfer}>
                  Transfer
                </span>
                <div className="popup">
                  <h4>Transfer Pin</h4>
                  <input
                    type="text"
                    className="input otp"
                    id="pin"
                    placeholder="Enter your pin"
                  />
                  <button className="btn" onClick={clickPin}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </Form>
      </div>
    </Wrapper>
  );
};
export default SendMoney;