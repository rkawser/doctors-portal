import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.config';

const BookingModal = ({ setBooking, booking, date, refetch }) => {
    const [user] = useAuthState(auth)
    const { name, slots, _id, price } = booking;
    const formattedDate = format(date, 'PP')

    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value
        console.log(slot);


        const booking = {
            teatMentId: _id,
            teatMentName: name,
            date: formattedDate,
            slot,
            price: price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/booking', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appoinment is set ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(` Already have and Appoinment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setBooking(null)
            })
    }

    return (
        <div>
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-accent w-full max-w-xs" />

                        <select name='slot' className="select select-accent w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" value={user?.displayName} disabled name='name' placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="email" value={user?.email} disabled name='email' placeholder="Email adress" className="input input-bordered input-accent w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="phone Number" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value='submit' className="btn btn-secondary input-accent w-full max-w-xs" />
                    </form>

                    <div className="modal-action">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookingModal;