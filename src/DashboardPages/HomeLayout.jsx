import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../DashboardComponent';
import { useSelector } from 'react-redux';

const HomeLayout = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {user && (
        <div>
          <Navbar />
          <div className="section-center" id="dashboard">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
export default HomeLayout;
