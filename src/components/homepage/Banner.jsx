import React from 'react';
import banner from '../../assets/banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='p-5'>

            <div className='container mx-auto bg-[#222630] border border-[#262A33] flex flex-col-reverse lg:flex-row justify-between items-center  p-6 sm:p-8 lg:p-15 rounded-2xl'>

                <div className='flex flex-col gap-5 sm:gap-6 w-full lg:w-auto'>
                    <p className='text-xs text-[#C2F800] font-semibold'>WORKOUT LIBRARY</p>

                    <h1 className='heading-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>TRAIN WITH INTENT. LOG   <br className="hidden sm:block" />
                        EVERY SET.</h1>

                    <p className='text-sm sm:text-base text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into todays plan, and watch the weeks work add up.</p>

                    <button className="w-fit rounded-md bg-[#C2F800] px-5 sm:px-6 py-3 text-[11px] sm:text-[12px] font-bold text-[#000000]">
                        BROWSE WORKOUTS
                    </button>
                </div>

                <div className='flex justify-center w-full lg:w-auto shrink-0'>
                    <Image
                        src={banner}
                        alt="FitLog banner"
                        width={350}
                        height={350}
                          className='w-52 sm:w-64 md:w-72 lg:w-87.5 h-auto'
                    />
                </div>

            </div>

        </div>
    );
};

export default Banner;