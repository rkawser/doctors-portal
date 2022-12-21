import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ tdata, refetch }) => {
    const { email, role } = tdata

    const makeAdmin = () => {

        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res =>{
                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('successfuly make admin')

                }
                
            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">make admin</button>}</td>
            <td><button className="btn btn-xs">delete User</button></td>
            <td></td>
        </tr>

    );
};

export default UserRow;