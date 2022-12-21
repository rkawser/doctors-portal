import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.config';
import Loading from '../Shared/Loading';
import { signOut } from 'firebase/auth';

const Myappoinment = () => {
    const [appoinment, setAppoinment] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/mybooking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if(res.status === 401 || 403){
                    //   navigate('/')
                    //  signOut(auth);
                    }
                    return res.json()
                })
                .then(data => {
                    setAppoinment(data)
                })
        }

    }, [user])

    return (
        <div className="overflow-x-auto">
            <h2 className='text-start my-4'>my Appointment : {appoinment.length}</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                {appoinment.length > 0 ?
                    <tbody>
                        {
                            appoinment.map((tdata, index) => <tr key={tdata._id}>
                                <th>{index + 1}</th>
                                <td>{tdata.patientName}</td>
                                <td>{tdata.date}</td>
                                <td>{tdata.slot}</td>
                                <td>{tdata.teatMentName}</td>
                                <td>{(tdata.price && !tdata.paid) && <Link to={`/dashbord/payment/${tdata._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}</td>
                            </tr>)
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

export default Myappoinment;