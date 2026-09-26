import React from 'react';
import WorkoutCard from '../../components/shared/WorkoutCard';

const getWorkouts = async () => {
    const reponse = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const data = await reponse.json();
    return data;
}

const Workouts = async () => {
    const workoutsData = await getWorkouts();
    return (
        <div className='container mx-auto py-10'>
            <div>
                <h3 className='heading-font text-3xl font-bold'>THE LIBRARY</h3>
                <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid gap-6 grid-cols-3'>
                {workoutsData.map((workout, ind) => {
                    return <WorkoutCard workout={workout} key={ind} ></WorkoutCard>
                }
                )}
            </div>
        </div>
    );
};

export default Workouts;