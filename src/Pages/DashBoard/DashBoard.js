import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';



const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>

                    {!admin &&

                        <>

                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addreview'>Add A Review</Link></li>

                        </>

                    }

                    {admin &&
                        <>
                            <li><Link to="/dashboard/allusers">All Users</Link></li>
                            <li><Link to="/dashboard/addproducts">Add Products</Link></li>
                            <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                            <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>



                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;