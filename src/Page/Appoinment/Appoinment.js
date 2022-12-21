import React, { useState } from 'react';
import AppoinmentAvailable from './AppoinmentAvailable';
import AppointmentBanner from './AppointmentBanner';

const Appoinment = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div>
           <AppointmentBanner date={date} setDate={setDate}/>
           <AppoinmentAvailable date={date}></AppoinmentAvailable>
        </div>
    );
};

export default Appoinment;