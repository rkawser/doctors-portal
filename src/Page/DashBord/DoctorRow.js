import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor;

    const handledelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`doctor ${name} is Deleted.`)
                    refetch();
                }
            }

            )
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="w-16 bg-primary rounded-xl">
                <img src={img} alt={name} />
            </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handledelete(email)} className="btn btn-xs text-red-500">Delete</button></td>
        </tr>

    );
};

export default DoctorRow;