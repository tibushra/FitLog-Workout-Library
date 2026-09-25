import Image from 'next/image';
import React from 'react'
import { CiMedicalCase } from 'react-icons/ci';
import { MdOutlineSaveAlt } from 'react-icons/md';

const getWorkouts = async () => {
    const reponse = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await reponse.json();
    return data;
}

const WorkoutDetailsPage = async ({ params }) => {

    const { id } = await params;
    const workoutsData = await getWorkouts();
    const workout = workoutsData.find((workout) => String(workout.id) === String(id));

    return (
        <div className="container mx-auto card lg:card-side bg-base-100 shadow-sm p-10">
            <figure>
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={500}
                    height={500} />
            </figure>
            <div className="card-body grid gap-4">
                <h2 className="card-title font-bold text-5xl">{workout.name}</h2>
                <p className='text-[#9CA3AF]'>{workout.description}</p>
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
                <div className='bg-[#20242E] border border-[#2c3341] rounded-2xl overflow-hidden shadow-sm grid gap-2 p-4 text-[#9CA3AF]'>
                    <p className='flex justify-between'>
                        EQUIPMENT
                        <span className='text-[#E5E7EB]'>{workout.equipment}</span>
                    </p>
                    <div className="h-px bg-[#2c3341]" />
                    <p className='flex justify-between'>
                        DIFFICULTY
                        <span className='text-[#E5E7EB]'>{workout.difficulty}</span>
                    </p>
                    <div className="h-px bg-[#2c3341]" />
                    <p className='flex justify-between'>
                        SETS
                        <span className='text-[#E5E7EB]'>{workout.sets}</span>
                    </p>
                    <div className="h-px bg-[#2c3341]" />
                    <p className='flex justify-between'>
                        REPS
                        <span className='text-[#E5E7EB]'>{workout.reps}</span>
                    </p>
                    <div className="h-px bg-[#2c3341]" />
                    <p className='flex justify-between'>
                        DURATION
                        <span className='text-[#E5E7EB]'>{workout.duration} min</span>
                    </p>
                    <div className="h-px bg-[#2c3341]" />
                    <p className='flex justify-between'>
                        CALORIES
                        <span className='text-[#E5E7EB]'>{workout.caloriesBurned} kcal</span>
                    </p>
                    <div className="h-px bg-[#2c3341]" />
                    <p className='flex justify-between'>
                        RATING
                        <span className='text-[#E5E7EB]'>{workout.rating}</span>
                    </p>
                </div>
                <div className="mt-5">
                    <h2 className="text-sm font-bold uppercase text-white">
                        Instructions
                    </h2>

                    <ol className="mt-3 space-y-3">
                        {workout.instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className="flex gap-3 text-sm text-slate-400"
                            >
                                <span>{index + 1}.</span>
                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="card-actions justify-start">
                    <button className='flex gap-2 items-center bg-[#CCFF00] px-4 py-2 rounded-md text-[#0F1115] font-semibold hover:bg-[#90aa28]'>
                        <CiMedicalCase /> Add to todays plan
                    </button>
                    <button className='flex gap-2 items-center border border-[#2c3341] px-4 py-2 rounded-md text-[#E5E7EB] font-semibold hover:bg-gray-800'>
                        <MdOutlineSaveAlt /> Save for later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;