import React from 'react';

const Btn = ({ children, className }) => {
    return (
        <div className={`border-[5px] border-black bg-black hover:bg-white rounded ${className}`}>
            <button className='w-full py-2 text-white font-bold hover:text-black'>{children}</button>
        </div>
    );
};

export default Btn;