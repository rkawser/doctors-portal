import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Navber from './Page/Shared/Navber';
import Footer from './Page/Shared/Footer';
import Appoinment from './Page/Appoinment/Appoinment';
import SocialLogin from './Page/SocialLogin/SocialLogin';
import RequireAuth from './Page/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBord from './Page/DashBord/DashBord';
import Myappoinment from './Page/DashBord/Myappoinment';
import MyReview from './Page/DashBord/MyReview';
import AllUsers from './Page/DashBord/AllUsers';
import RequirAdmin from './Page/RequireAdmin';
import AddDoctors from './Page/DashBord/AddDoctors';
import ManageDoctor from './Page/DashBord/ManageDoctor';
import Payment from './Page/DashBord/Payment';
function App() {
  return (
    <div className="App">
      <Navber />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appoinment' element={
          <RequireAuth>
            <Appoinment />
          </RequireAuth>
        }></Route>
        <Route path='login' element={<SocialLogin />}></Route>

        <Route path='dashbord' element={<RequireAuth> <DashBord /> </RequireAuth>}>
          <Route index element={<Myappoinment />}></Route>
          <Route path='myreview' element={<MyReview />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='allusers' element={<RequirAdmin> <AllUsers /></RequirAdmin>}></Route>
          <Route path='adddoctors' element={<RequirAdmin> <AddDoctors /></RequirAdmin>}></Route>
          <Route path='managedoctor' element={<RequirAdmin> <ManageDoctor /></RequirAdmin>}></Route>

        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
