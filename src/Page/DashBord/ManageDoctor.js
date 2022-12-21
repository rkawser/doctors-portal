import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

    const { data: doctor, isLoading ,refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl text-start font-bold'>Manage Doctors {doctor.length}</h2>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Avater</th>
                        <th>Name</th>
                        <th>Specialty</th>
                        <th>Action</th>

                    </tr>
                </thead>
                {doctor.length > 0 ?
                    <tbody>
                        {
                            doctor.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                refetch={refetch}
                                doctor={doctor}></DoctorRow>)
                        }
                    </tbody>
                    :
                    <div>
                        <Loading></Loading>
                    </div>
                }
            </table>
        </div>
    );
};

export default ManageDoctor;