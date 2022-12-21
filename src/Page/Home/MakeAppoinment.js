import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinmentBg from '../../assets/images/appointment.png'
import Actionbtn from './Actionbtn';
const MakeAppoinment = () => {
    return (
        <div style={{
            background:`url(${appoinmentBg})`
        }} className='lg:flex justify-center items-center my-12'>
            <div className='flex-1'>
                <img className='mt-[-120px] hidden lg:block' src={doctor} alt="" />
            </div>

            <div className='flex-1 text-justify px-2'>
                <h1 className='text-primary text-xl font-bold my-5'>Appointment</h1>
                <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                <p className='text-white my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi molestias tempora corporis nam a accusamus, doloremque cumque quae molestiae cupiditate eaque culpa quod. Maiores, natus voluptas eligendi pariatur accusantium repellat asperiores autem deserunt molestiae quae fugiat, velit dolorum omnis.</p>
                <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none my-5">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppoinment;