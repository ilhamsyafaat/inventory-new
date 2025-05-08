import Image from 'next/image';
import React from 'react';

const element = () => {
    return (
        <div className='min-h-screen px-0 py-12 bg-darkBlue'>
    <div className='flex flex-col items-center w-full p-6 pt-5 pb-10 pl-10 bg-fuchsia-50 md:flex-row'>
        <div className='pt-10 pb-10 text-center md:w-1/2 md:text-left'>
        <h3 className='mb-2 text-lg font-semibold text-blue-600'>Fast-track your learning</h3>
        <h2 className='mb-4 text-5xl font-bold text-gray-800'>Learn By Doing</h2>
        <p className='text-gray-600'>Learn Programing skills, from absolute beginner to advanced mastery.We try to create project base course which help your to learn professionally and make you fell as a complete developer</p>
        </div>  

    <div className='flex justify-center mt-6 md:w-1/2 md:mt-0'>
        <Image
            src="/assets/images/two.png"
            alt='Learning by doing'
            width={500}
            height={400}
            className='rounded-lg' 
        /> 
    </div> 
    </div>
    
    <div className='flex flex-col items-center w-full p-6 pt-5 pb-10 pl-10 bg-blue-50 md:flex-row'>
    <div className='flex justify-center mb-6 md:w-1/2 md:mb-0'>
    <Image
            src="/assets/images/one.png"
            alt='Put Your Learning'
            width={500}
            height={400}
            className='rounded-lg' 
        />  
    </div>

    <div className='text-center md:w-1/2 md:text-left'>
        <h3 className='mb-2 text-lg font-semibold text-green-600'>Step-by-step lessons</h3>
        <h2 className='mb-4 text-5xl font-bold text-gray-800'>Put Your Learning <br/> Into Practice</h2>
        <p className='text-gray-600'>Apply your learning with real-world projects and learn everything you need to take your career to the next level.</p>
        </div>  
    </div> 

</div>
    );
};

export default element;