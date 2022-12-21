import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ apartment }) => {

    const stripe = useStripe()
    const elements = useElements();
    const [carderror, setCarderror] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')


    const { price, patient, patientName } = apartment;

    useEffect(() => {

        fetch('http://localhost:5000/create-paymant-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        }).then(res => res.json())
            .then(data => {

                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })


    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod(({
            type: 'card',
            card,
        }))

        if (error) {
            setCarderror(error.message);
        }
        else {
            setCarderror('');
        }

        setSuccess('');

        //confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        if (intentError) {
            setCarderror(intentError?.message)
            
        } else {
            setCarderror('')
            setSuccess('Congrats! Your payment is completed')
        }

    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-xs mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                carderror && <p className='text-red-500'>{carderror}</p>
            }
            {
                success && <p className='text-green-500'>{success}</p>
            }
        </>
    );
};

export default CheckoutForm;