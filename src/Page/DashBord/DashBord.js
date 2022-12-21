import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.config';
import useAdmin from '../hooks/UseAdmin';



const DashBord = () => {
    const [user]= useAuthState(auth);
    const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold text-start text-purple-500'>Welcome to your  DashBoard</h2>
                <Outlet />
               
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashbord'>My Appoinment</Link></li>
                    <li><Link to='/dashbord/myreview'> My Review</Link></li>
                  {admin && <>
                    <li><Link to='/dashbord/allusers'>All Users</Link></li> 
                    <li><Link to='/dashbord/adddoctors'>Add Doctors</Link></li> 
                    <li><Link to='/dashbord/managedoctor'>Manage Doctors</Link></li> 
                  </>}
                </ul>
            </div>
            
        </div>
    );
};

export default DashBord;