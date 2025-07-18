import React from 'react';

const Navigation = () => {
    return (
        <div className="text-white flex flex-row justify-between mb-[5rem] md:mb-[10rem]">
            <div className='font-family-comico relative cursor-pointer group'>
                <span className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                    MB
                </span>
                <span className="absolute inset-0 flex items-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap">
                    Marouane Boufarouj
                </span>
            </div>
            <div className='flex flex-row gap-4 font-family-comico'>
                <a href='#' className='hover:text-[#ff947f]'>Project</a>
                <a href='#' className='hover:text-[#ff947f]'>Blog</a>
            </div>
        </div>
    );
};

export default Navigation; 