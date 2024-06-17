import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/DashboardWrapper/SendMoney';

const Alert = ({ name, amount, bank, accountNumber }) => {
  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Wrapper>
      <div className="alert-img">
        <div className="close-btn">
          <FaTimes className="close" />
        </div>

        <div className="c-img">
          <img
            src="/confirmed2.svg"
            className="confirmed-img"
            alt="confirmed"
          />
        </div>
        <h4>Success</h4>

        <p>
          <span>Name:</span>
          <span className="bold"> {name}</span>
        </p>
        <p>
          <span>Amount:</span>
          <span className="bold"> USD {format(amount)}</span>
        </p>
        <p>
          <span>Bank Name: </span>
          <span className="bold">{bank}</span>
        </p>
        <p>
          <span>Account Number:</span>{' '}
          <span className="bold">{accountNumber}</span>
        </p>

        <button className="btn confirmed-btn">OK</button>
        <button className="btn share-btn">Share</button>
      </div>
    </Wrapper>
  );
};
export default Alert;
