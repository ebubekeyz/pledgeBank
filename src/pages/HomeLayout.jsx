import { Outlet } from 'react-router-dom';
import { Footer, Navbar, TopHeader } from '../components';

const HomeLayout = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
