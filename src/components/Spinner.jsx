import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center space-x-2 py-40">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-neutral"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-neutral"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-neutral"></div>
        </div>
    );
};

export default Spinner;