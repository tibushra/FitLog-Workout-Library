"use client";

import { WorkoutsContext } from '../../context/WorkoutsContext';
import React, { useContext } from 'react';
import { CiMedicalCase } from 'react-icons/ci';
import { toast } from 'react-toastify';

const TodaysPlanButton = ({ workout }) => {

    const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext)

    const handleTodaysPlan = () => {

        const alreadyAdded = todaysPlan.some(
            (item) => String(item.id) === String(workout.id)
        );

        if (alreadyAdded) {
            toast.warning(`${workout.name} is already in today's plan`);
            return;
        }

        setTodaysPlan((prevTodaysPlan) => [...prevTodaysPlan, workout])
        toast.success(`${workout.name} Added to todays plan`);
        
    }

    return (
        <button className='flex gap-2 items-center bg-[#CCFF00] px-4 py-2 rounded-md text-[#0F1115] font-semibold hover:bg-[#90aa28]' onClick={() => handleTodaysPlan()} >
            <CiMedicalCase /> Add to todays plan
        </button>
    );
};


export default TodaysPlanButton;