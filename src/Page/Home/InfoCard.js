import React from 'react';

const InfoCard = ({ img,bgColor,cardText,text }) => {
    return (
        <div className={`card lg:card-side  pl-5 pt-5 ${bgColor}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white text-justify">
                <h2 className="card-title">{cardText}!</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default InfoCard;