import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../DashboardComponent';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="section-center" id="dashboard">
        <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;
