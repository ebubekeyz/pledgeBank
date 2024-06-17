import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../DashboardComponent';
import { customFetch } from '../utils';
import { useSelector } from 'react-redux';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="section-center" id="dashboard">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </>
  );
};
export default HomeLayout;
