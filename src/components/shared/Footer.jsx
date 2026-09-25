import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-5'>
            <div className='flex justify-between items-center gap-2'>
                <Image
                    src={logo}
                    alt="FitLog logo"
                    width={30}
                    height={30}
                />
                <h2 className='font-bold text-2xl'>FITLOG</h2>
            </div>
            <div>
                <p className='text-sm text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
        </div>
    );
};

export default Footer;