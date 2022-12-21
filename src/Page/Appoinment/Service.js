import React, { useState } from 'react';

const Service = ({service, setBooking}) => {
        const {name,slots,price} =service ;
      
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
            <div className="card-body">
                <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
                <p>{
                slots.length >0 ? 
                <span>{slots[0]}</span>    
                :
                <span className='text-red-400'>try another date</span>
                 }</p>
                <p>{slots.length} available {slots.length > 0 ? 'spaces' : 'space'}</p>
                 <p>price: ${price}</p>
                <div className="card-actions justify-center">
                    <label 
                    onClick={()=>setBooking(service)}
                     htmlFor="booking-modal" disabled={slots.length ===0} className="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;