import React, { useEffect, useState } from 'react';

import User from './User';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://dry-headland-85365.herokuapp.com/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>User</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <User
                                key={user._id}
                                user={user}

                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;

