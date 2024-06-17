import {
  FaClosedCaptioning,
  FaDollarSign,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMoneyBillTransfer,
  FaMoneyBills,
  FaPerson,
  FaPhone,
  FaPinterest,
  FaPowerOff,
  FaQuestion,
  FaTwitter,
} from 'react-icons/fa6';
import Wrapper from '../assets/DashboardWrapper/Sidebar';
import {
  FaEdit,
  FaHome,
  FaReceipt,
  FaServicestack,
  FaTimes,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ onClick, onClick2 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userState.user);

  const handleLogout = (e) => {
    navigate('/login');
    dispatch(logoutUser());
  };
  return (
    <Wrapper>
      <aside onClick={onClick2} className="sidebar" id="sidebar">
        <div>
          <button className="close-btn" id="close-btn">
            <FaTimes onClick={onClick} />
          </button>
          {/* nav-links  */}

          <ul className="sidebar-links">
            <div className="sidebar-logo">
              <img src="/logo.png" className="side-logo" alt="logo" />
            </div>

            <li>
              <FaHome className="home" />
              <a href="/dashboard">home</a>
            </li>
            <li>
              <FaPerson className="person" />
              <a href="/dashboard/accountInfo">Account</a>
            </li>

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBillTransfer className="question" />
                <a href="/dashboard/withdraw">Withdraw</a>
              </li>
            ) : (
              <li>
                <FaMoneyBillTransfer className="question" />
                <a href="/dashboard/sendMoney">Send Money</a>
              </li>
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBills className="phone" />
                <a href="/dashboard/adminDeposit">Deposit</a>
              </li>
            ) : (
              <li>
                <FaMoneyBills className="phone" />
                <a href="/dashboard/deposit">Deposit</a>
              </li>
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBills className="phone" />
                <a href="/dashboard/set-transfer-details">Transfer Info</a>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FiSettings className="phone" />
                <a href="/dashboard/notificationMessage">Notification</a>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FiSettings className="phone" />
                <a href="/dashboard/siteMap">Site Map</a>
              </li>
            ) : (
              ''
            )}

            <li>
              <FaReceipt className="service" />
              <a href="/dashboard/transaction">Transactions</a>
            </li>

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <a href="/dashboard/addUser">Add User</a>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <a href="/dashboard/update">Update</a>
              </li>
            ) : (
              ''
            )}
          </ul>

          <div className="power" onClick={handleLogout}>
            <FaPowerOff className="power-btn" />
            <span className="logout">Logout</span>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};
export default Sidebar;
