import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import mark from '../../assets/icons/marker.svg';
import contact from '../../assets/icons/phone.svg';
const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgColor='bg-gradient-to-r from-secondary to-primary' cardText='Opening Hours' img={clock} text='Lorem Ipsum is simply dummy text of the pri'></InfoCard>
            <InfoCard bgColor='bg-accent' img={mark} cardText='Visit our location' text='Brooklyn, NY 10036, United States'></InfoCard>
            <InfoCard bgColor='bg-gradient-to-r from-secondary to-primary' img={contact} cardText='Contact us now' text='+000 123 456789'></InfoCard>
        </div>
    );
};

export default Info;