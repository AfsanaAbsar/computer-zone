import React from 'react';
import { Outlet, Link } from 'react-router-dom'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.config';


const DashBoard = () => {
    // const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='font-bold text-lg text-secondary'>Welcome To Dashboard</h1>
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myreview'>My Reviews</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {/* {admin &&
                    <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add A Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>

                    </>
                } */}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;