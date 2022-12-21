import { data } from 'autoprefixer';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AppoinmentAvailable = ({date}) => {
    const [booking,setBooking] = useState(null);

    const formatedDate = format(date, 'PP')

    const {data:services, isLoading, refetch} = useQuery(['available',formatedDate], ()=> fetch(`http://localhost:5000/available?date=${formatedDate}`)
    .then(res=>res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='my-12'>
            <h2 className='text-xl text-secondary my-5 '>Available Services on {format(date ,'PP')}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-12'>
                {
                    services.map(service=><Service
                         key={service._id}
                         setBooking={setBooking}
                         
                         service={service}></Service>)
                }
            </div>
            {
                booking && <BookingModal setBooking={setBooking}
                 date={date} booking={booking}
                 refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AppoinmentAvailable;