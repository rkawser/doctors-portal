import React, { Children } from 'react';

const Actionbtn = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none">{children}</button>
    );
};

export default Actionbtn;