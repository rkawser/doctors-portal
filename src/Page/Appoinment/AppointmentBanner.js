import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({date,setDate}) => {
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:justify-between flex-col lg:flex-row-reverse">
                <img className='w-1/2' src={chair} />
                <div>
                    < DayPicker
                    mode='single'
                    setDate={setDate}
                    onSelect={setDate}
                    />
               
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;