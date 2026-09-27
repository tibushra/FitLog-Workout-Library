"use client"

import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import ActiveNavLink from "../shared/ActiveNavLink";
import { WorkoutsContext } from '../../context/WorkoutsContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {

    const { todaysPlan, saved } = useContext(WorkoutsContext);


    return (
        <>
            <div className='container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-0 py-4 sm:py-5'>
                <div className="md:hidden"><RxHamburgerMenu /></div>
                <div className='heading-font flex justify-between items-center gap-2'>
                    <Image
                        src={logo}
                        alt="FitLog logo"
                        width={30}
                        height={30}
                    />
                    <h2 className='font-bold text-xl sm:text-2xl'>FITLOG</h2>
                </div>

                <div className='hidden md:flex md:gap-1 sm:gap-2'>

                    <ActiveNavLink href="/">
                        Workouts
                    </ActiveNavLink>

                    <ActiveNavLink href="/myPlan">
                        MyPlan
                    </ActiveNavLink>

                </div>
                <div className='flex  gap-1 sm:gap-2'>

                    <Link href="/myPlan">
                        <button className="flex items-center gap-2 rounded-2xl px-2.5 sm:px-3 py-2 text-[#D1D5DB] hover:bg-gray-800">
                            Plan
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[11px] font-bold text-black"> {todaysPlan.length} </span>
                        </button>
                    </Link>

                    <Link href="/myPlan">
                        <button className="flex items-center gap-2 rounded-2xl px-2.5 sm:px-3 py-2 text-[#9CA3AF] hover:bg-gray-800">
                            Saved
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-[11px]"> {saved.length} </span>
                        </button>
                    </Link>

                </div>

            </div>

            <div className="h-px bg-[#2c3341]" />

        </>
    );
};

export default Navbar;