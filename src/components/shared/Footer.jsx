import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <>

            <div className="h-px bg-[#2c3341]" />

            <div className='container mx-auto flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center px-4 sm:px-6 lg:px-0  py-5'>
                <div className='flex justify-between items-center gap-2'>
                    <Image
                        src={logo}
                        alt="FitLog logo"
                        width={30}
                        height={30}
                    />
                    <h2 className='heading-font font-bold text-2xl'>FITLOG</h2>
                </div>
                <div>
                    <p className='text-xs sm:text-sm text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>

        </>
    );
};

export default Footer;