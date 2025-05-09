import React from 'react';
import { SignupForm } from '../_components/signup-form';

const RegisterPage = ({params: {role}}) => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <div className='container'>
                <SignupForm role={role}/>
            </div>
        </div>
    );
};

export default RegisterPage;