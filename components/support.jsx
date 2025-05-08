import Image from 'next/image';
import React from 'react';

const support = () => {
    return (
        <div className='px-4 py-5 text-black border-b border-gray-700 bg-darkBlue md:px-16'>
    <div className='flex flex-col items-center mx-auto space-y-12 max-w-7xl md:flex-row md:space-y-0 md:space-x-8'>
        <div className='flex-1'>
            <p className='mt-5 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:leading-tight font-poppins'>
    <span className='relative inline-flex sm:inline'>
        <span className='bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0'> 
        </span>
        <span className='relative'>Let us know for support</span> 
    </span> 
            </p>

    <p className='mt-8 mb-8 leading-relaxed text-black'>
    I Am Founder Of Easy Learning Academy
And Best Selling Online Instructor Around The World
My life’s mission is to help novice and professional software engineers increase their skills, make more money, and ultimately change their lives for the better.
        </p>

    <div className='flex flex-wrap gap-4'>
        <a href="#" className='px-6 py-3 font-semibold text-white transition rounded-lg shadow bg-fuchsia-500 hover:bg-fuchsia-800'>
            Contact Us
        </a>

        <a href="#" className='px-6 py-3 font-semibold text-white transition bg-gray-700 rounded-lg shadow hover:bg-gray-900'>
           Call for Support
        </a>
    </div>  
        </div>

    
    <div className='flex justify-center flex-1'>
    <Image
            src="/assets/images/support1.png"
            alt='Support'
            width={500}
            height={400}
            className='rounded-lg' 
        />  

    </div>


    </div>
    
</div>
    );
};

export default support;