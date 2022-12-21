import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-start'>all users {users?.length}</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Name</th>
                        <th>Admin</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                {users.length > 0 ?
                    <tbody>
                        {
                            users.map((tdata, index) => <UserRow tdata={tdata}
                              refetch={refetch}
                            ></UserRow>)
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

export default AllUsers;