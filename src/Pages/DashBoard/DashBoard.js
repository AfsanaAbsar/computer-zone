import React from 'react';
import { Outlet, Link } from 'react-router-dom'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.config';


const DashBoard = () => {
    // const [user] = useAuthState(auth);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='font-bold text-lg text-secondary'>Welcome To Dashboard</h1>
                <Outlet></Outlet>

                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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