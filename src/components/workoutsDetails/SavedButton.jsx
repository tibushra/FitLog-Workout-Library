"use client";

import { WorkoutsContext } from '../../context/WorkoutsContext';
import React, { useContext } from 'react';
import { CiMedicalCase } from 'react-icons/ci';
import { MdOutlineSaveAlt } from 'react-icons/md';
import { toast } from 'react-toastify';

const SavedButton = ({ workout }) => {

    const { saved, setSaved } = useContext(WorkoutsContext)

    const handleSaved = () => {
        const alreadyAdded = saved.some(
            (item) => String(item.id) === String(workout.id)
        );

        if (alreadyAdded) {
            toast.warning(`${workout.name} is already in save for later`);
            return;
        }

        setSaved((prevSaved) => [...prevSaved, workout])
        toast.success(`${workout.name} saved for later`);
    }

    return (
        <button className='flex gap-2 items-center border border-[#2c3341] px-4 py-2 rounded-md text-[#E5E7EB] font-semibold hover:bg-gray-800' onClick={() => handleSaved()} >
            <MdOutlineSaveAlt /> Save for later
        </button>
    );
};

export default SavedButton;