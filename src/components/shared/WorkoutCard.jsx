import Image from 'next/image';
import React from 'react';
import { FaFire, FaRegClock } from 'react-icons/fa6';
import { FaRegStar } from "react-icons/fa";

const WorkoutCard = ({ workout }) => {
    return (
        <div className='py-10'>
            <div className="bg-[#20242E] border border-[#2c3341] rounded-2xl overflow-hidden shadow-sm">
                <figure className="w-full h-47.5">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={400}
                        height={190}
                        className="w-full h-full object-cover" />

                </figure>
                <div className='grid gap-5 p-5'>
                    <div className="flex gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="badge badge-sm bg-[#C2F800] text-[#000000] font-bold px-3 py-3  rounded-4xl"
                            >
                                {muscle.toUpperCase()}
                            </span>
                        ))}
                    </div>
                    <div>
                        <h2 className='font-bold text-2xl'>
                            {workout.name}

                        </h2>
                        <p className='text-[#9CA3AF]'>
                            {workout.equipment}
                        </p>
                    </div>

                    <div className="h-px bg-[#2c3341]" />

                    <div className='flex justify-between items-center text-[#9CA3AF]'>

                        <div className='flex items-center gap-2'>
                            <FaRegClock />
                            <p>{workout.duration} min</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaFire />
                            <p>{workout.caloriesBurned} kcal</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaRegStar /> <p>{workout.rating}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;