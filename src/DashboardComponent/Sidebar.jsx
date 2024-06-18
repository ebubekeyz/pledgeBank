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
import { Link, useNavigate } from 'react-router-dom';
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
              <Link to="/dashboard">home</Link>
            </li>
            <li>
              <FaPerson className="person" />
              <Link to="/dashboard/accountInfo">Account</Link>
            </li>

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBillTransfer className="question" />
                <Link to="/dashboard/withdraw">Withdraw</Link>
              </li>
            ) : (
              <li>
                <FaMoneyBillTransfer className="question" />
                <Link to="/dashboard/sendMoney">Send Money</Link>
              </li>
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBills className="phone" />
                <Link to="/dashboard/adminDeposit">Deposit</Link>
              </li>
            ) : (
              <li>
                <FaMoneyBills className="phone" />
                <Link to="/dashboard/deposit">Deposit</Link>
              </li>
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBills className="phone" />
                <Link to="/dashboard/set-transfer-details">Transfer Info</Link>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FiSettings className="phone" />
                <Link to="/dashboard/notificationMessage">Notification</Link>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FiSettings className="phone" />
                <Link to="/dashboard/siteMap">Site Map</Link>
              </li>
            ) : (
              ''
            )}

            <li>
              <FaReceipt className="service" />
              <Link to="/dashboard/transaction">Transactions</Link>
            </li>

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <Link to="/dashboard/addUser">Add User</Link>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <Link to="/dashboard/update">Update</Link>
              </li>
            ) : (
              ''
            )}
            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <Link to="/dashboard/changePassword">Change Password</Link>
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
