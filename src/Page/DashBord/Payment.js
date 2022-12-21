import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51MGlezLlMAuBQ7ne8u2mleXCVX29WFz85FeDWUvvnGamLEEKWmn69bbkiOx9Ip04CRDls3e3CsqRCX7LtFDKpdO300Axhnp9D4');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: apartment, isLoading } = useQuery(['booking', id], () => fetch(url, {
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

    const { teatMentName, date, slot, patient, patientName, price } = apartment;
    return (
        <div className=''>

            <div className="card w-1/3 bg-base-100 shadow-xl my-12 mx-auto text-start">
                <div className="card-body">
                    <h2 className='font-bold text-start text-2xl text-secondary'>Hello, {patientName}</h2>
                    <h2 className="card-title">Please pay for {teatMentName}</h2>
                    <p>your appoinment <span className='text-yellow-500'>{date}</span> at {slot}</p>
                    <p>please ordar pay <span className='text-secondary'>${price}</span></p>

                </div>
            </div>

            <div className="card bg-base-100 shadow-2xl my-5 mx-auto w-1/3 ">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm apartment={apartment} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;