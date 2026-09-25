import React from 'react';
import banner from '@/assets/banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='p-5'>

            <div className='container mx-auto bg-[#222630] border border-[#262A33] flex justify-between items center p-15 rounded-2xl'>

                <div className='flex flex-col gap-6'>
                    <p className='text-xs text-[#C2F800] font-semibold'>WORKOUT LIBRARY</p>

                    <h1 className='text-7xl font-bold'>TRAIN WITH INTENT. LOG <br />
                        EVERY SET.</h1>

                    <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into todays plan, and watch the weeks work add up.</p>

                    <button className="w-fit rounded-md bg-[#C2F800] px-6 py-3 text-[12px] font-bold text-[#000000]">
                        BROWSE WORKOUTS
                    </button>
                </div>

                <div>
                    <Image
                        src={banner}
                        alt="FitLog banner"
                        width={350}
                        height={350}
                    />
                </div>

            </div>

        </div>
    );
};

export default Banner;