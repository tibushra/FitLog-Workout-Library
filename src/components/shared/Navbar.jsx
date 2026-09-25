import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Navbar = () => {
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
            <div className='flex gap-2'>
                <button className='px-4 py-1 rounded-2xl hover:bg-gray-800 text-[#9CA3AF]'>
                    Workouts
                    </button>
                <button className='px-4 py-1 rounded-2xl hover:bg-gray-800 text-[#9CA3AF]'>
                    MyPlan
                    </button>
            </div>
            <div className='flex gap-2'>
                <button className="flex items-center gap-2 rounded-2xl px-3 py-2 text-white hover:bg-gray-800">
                    Plan
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[11px] font-bold text-black"> 0 </span>
                </button>

                <button className="flex items-center gap-2 rounded-2xl px-3 py-2 text-[#9CA3AF]hover:bg-gray-800">
                    Saved
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-[11px]"> 0 </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;