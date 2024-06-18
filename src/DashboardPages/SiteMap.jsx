import { Link } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/SiteMap';

const SiteMap = () => {
  return (
    <Wrapper>
      <div className="siteMap">
        <article className="site-map">
          <h4>Main Site Link</h4>
          <Link to="/"></Link>
        </article>

        <article className="site-map">
          <h4>View Site Map</h4>
          <Link to="/dashboard/siteMap" className="link">
            Site Map
          </Link>
        </article>

        <article className="site-map">
          <h4>Link to Register Account</h4>
          <Link to="/register" className="link">
            Register
          </Link>
        </article>

        <article className="site-map">
          <h4>Link to Login Account</h4>
          <Link to="/login" className="link">
            Login
          </Link>
        </article>

        <article className="site-map">
          <h4>Jivo Chat Login Details</h4>
          <Link to="https://app.jivosite.com/login" className="link">
            Login Jivo Chat
          </Link>
          <div className="jivo">
            <p>
              <b>email:</b> team.pledge.bank@gmail.com
            </p>
            <p>
              <b>Password:</b> pledgebank2024
            </p>
          </div>
        </article>

        <article className="site-map">
          <h4>Gmail Login Details</h4>
          <Link to="https://mail.google.com" className="link">
            Login Gmail
          </Link>
          <div className="jivo">
            <p>
              <b>email:</b> team.pledge.bank@gmail.com
            </p>
            <p>
              <b>Password:</b> pledgebank2024
            </p>
          </div>
        </article>

        <article className="site-map">
          <h4>Admin1 Login Details (has been changed)</h4>
          <Link to="/login" className="link">
            Admin Login
          </Link>
          <div className="jivo">
            <p>
              <b>email:</b> oliveramora223@gmail.com
            </p>
            <p>
              <b>Password:</b> secret
            </p>
          </div>
        </article>

        <article className="site-map">
          <h4>Update or Modify Account Details</h4>
          <Link to="/dashboard/account" className="link">
            Modify Account Details
          </Link>
        </article>

        <article className="site-map">
          <h4>Update Passport</h4>
          <Link to="/dashboard/passport" className="link">
            Update Passport
          </Link>
        </article>

        <article className="site-map">
          <h4>Change Password</h4>
          <Link to="/dashboard/security" className="link">
            Change Password
          </Link>
        </article>

        <article className="site-map">
          <h4>Deposit Money (You must login as Admin to Deposit)</h4>
          <Link to="/dashboard/deposit" className="link">
            Deposit Money
          </Link>
        </article>

        <article className="site-map">
          <h4>Withdraw User Fund from Admin Dashboard</h4>
          <Link to="/dashboard/withdraw" className="link">
            Withdraw as Admin
          </Link>
        </article>

        <article className="site-map">
          <h4>Send Money from User Dashboard</h4>
          <Link to="/dashboard/sendMoney" className="link">
            Send Money as User
          </Link>
        </article>

        <article className="site-map">
          <h4>Check Account Information</h4>
          <Link to="/dashboard/accountInfo" className="link">
            Account Details
          </Link>
        </article>

        <article className="site-map">
          <h4>Transaction History</h4>
          <Link to="/dashboard/transaction" className="link">
            Transaction History
          </Link>
        </article>

        <article className="site-map">
          <h4>Check Account Balance or Dashboard Homepage</h4>
          <Link to="/dashboard" className="link">
            Check Account Balance
          </Link>
        </article>

        <article className="site-map">
          <h4>Set Transfer Details(which includes your transfer pin)</h4>
          <Link to="/dashboard/set-transfer-details" className="link">
            Set Transfer Details
          </Link>
        </article>

        <article className="site-map">
          <h4>Send Notification Message to Client</h4>
          <Link to="/dashboard/notificationMessage" className="link">
            Send Notification Message
          </Link>
        </article>

        <article className="site-map">
          <h4>Update Withdrawals </h4>
          <Link to="/dashboard/update" className="link">
            Update Withdrawals
          </Link>
        </article>

        <article className="site-map">
          <h4>Update Deposit </h4>
          <Link to="/dashboard/updateDeposit" className="link">
            Update Deposit
          </Link>
        </article>

        <article className="site-map">
          <h4>Update User </h4>
          <Link to="/dashboard/updateUsers" className="link">
            Update User
          </Link>
        </article>

        <article className="site-map">
          <h4>Add User </h4>
          <Link to="/dashboard/addUser" className="link">
            Add User
          </Link>
        </article>

        <article className="site-map">
          <h4>Reset User's Password </h4>
          <Link to="/dashboard/changePassword" className="link">
            Reset User's Password
          </Link>
        </article>
      </div>
    </Wrapper>
  );
};
export default SiteMap;
