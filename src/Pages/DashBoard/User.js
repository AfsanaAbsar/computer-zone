import React from 'react';

const User = ({ user }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    alert(`Successfully made an admin`);
                }


            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <p>Admin</p>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default User;