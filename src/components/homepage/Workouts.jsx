import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';

const getWorkouts = async () => {
    const reponse = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const data = await reponse.json();
    return data;
}

const Workouts = async () => {
    const workoutsData = await getWorkouts();
    return (
        <section id="workouts">
            <div className='container mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-10 py-10'>
                <div>
                    <h3 className='heading-font text-2xl sm:text-3xl font-bold'>THE LIBRARY</h3>
                    <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-2'>
                    {workoutsData.map((workout, ind) => {
                        return <WorkoutCard workout={workout} key={ind} ></WorkoutCard>
                    }
                    )}
                </div>
            </div>
        </section>
    );
};

export default Workouts;