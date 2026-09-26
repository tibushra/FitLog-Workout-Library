"use client";

import React, { useContext, useMemo, useState } from "react";
import { WorkoutsContext } from "../../context/WorkoutsContext";
import { RxCross2 } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineFire } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

const MyPlanPage = () => {
    const { todaysPlan, setTodaysPlan, saved, setSaved, } = useContext(WorkoutsContext);

    const [activeTab, setActiveTab] = useState("today");
    const [sortBy, setSortBy] = useState("duration");

    const activeData = useMemo(() => {
        return activeTab === "today" ? todaysPlan || [] : saved || [];
    }, [activeTab, todaysPlan, saved]);

    const sortedData = useMemo(() => {
        const data = [...activeData];

        if (sortBy === "duration") {
            return data.sort((a, b) =>
                Number(a.duration || 0) -
                Number(b.duration || 0)
            );
        }

        if (sortBy === "calories") {
            return data.sort((a, b) =>
                Number(b.caloriesBurned || 0) -
                Number(a.caloriesBurned || 0)
            );
        }

        if (sortBy === "rating") {
            return data.sort((a, b) =>
                Number(b.rating || 0) -
                Number(a.rating || 0)
            );
        }

        if (sortBy === "name") {
            return data.sort((a, b) =>
                String(a.name || "").localeCompare(
                    String(b.name || "")
                )
            );
        }
        return data;
    }, [activeData, sortBy]);

    const totalExercises = activeData.length;

    const totalMinutes = activeData.reduce((total, workout) => total + Number(workout.duration || 0), 0);

    const totalCalories = activeData.reduce((total, workout) => total + Number(workout.caloriesBurned || 0), 0);

    const removeWorkout = (id) => {
        if (activeTab === "today") {
            setTodaysPlan((prev) => prev.filter((workout) =>
                String(workout.id) !== String(id))
            );
        } else {
            setSaved((prev) => prev.filter((workout) =>
                String(workout.id) !== String(id))
            );
        }
    };

    const markAsDone = (id) => {
        setTodaysPlan((prev) => prev.filter((workout) =>
            String(workout.id) !== String(id))
        );
        toast.success(`Well done!`)
    };

    const addToTodaysPlan = (workout) => {
        setTodaysPlan((prev) => {
            const alreadyExists = prev.some((item) =>
                String(item.id) === String(workout.id)
            );

            if (alreadyExists) {
                return prev;
            }
            return [...prev, workout];
        });
    };

    return (
        <div className="container mx-auto px-8 py-8 text-white">

            <div>
                <h1 className="heading-font text-3xl font-bold">
                    MY PLAN
                </h1>
                <p className="text-[#9CA3AF] text-sm mt-1">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>
            <div className="mt-6 bg-[#13161c] border border-[#242933] rounded-xl px-5 py-6">
                <div className="grid grid-cols-3">
                    <div className="border-r border-[#242933]">
                        <p className="text-xs text-[#7d8491]">
                            Exercises
                        </p>
                        <p className="text-3xl font-bold text-[#CCFF00] mt-1">
                            {totalExercises}
                        </p>
                    </div>
                    <div className="border-r border-[#242933] pl-6">
                        <p className="text-xs text-[#7d8491]">
                            Minutes
                        </p>
                        <p className="text-3xl font-bold mt-1">
                            {totalMinutes}
                        </p>
                    </div>
                    <div className="pl-6">
                        <p className="text-xs text-[#7d8491]">
                            Calories
                        </p>
                        <p className="text-3xl font-bold mt-1">
                            {totalCalories}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center bg-[#13161c] border border-[#242933] rounded-lg p-1">
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`px-4 py-2 text-xs rounded-md transition-all ${activeTab === "today" ? "bg-[#242933] text-white" : "text-[#7d8491] hover:text-white"}`}>
                        Todays Plan
                    </button>
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`px-4 py-2 text-xs rounded-md transition-all ${activeTab === "saved" ? "bg-[#242933] text-white" : "text-[#7d8491] hover:text-white"}`} >
                        Saved
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-[#7d8491]">
                        Sort By
                    </span>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none bg-[#13161c] border border-[#242933] rounded-lg text-xs text-[#9CA3AF] px-3 py-2 pr-8 outline-none cursor-pointer" >
                            <option value="duration">
                                Duration
                            </option>
                            <option value="calories">
                                Calories
                            </option>
                            <option value="rating">
                                Rating
                            </option>
                            <option value="name">
                                Name
                            </option>
                        </select>
                        <IoChevronDown
                            size={13}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#7d8491] pointer-events-none"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4 space-y-3">
                {sortedData.length === 0 ? (
                    <div className="border border-dashed border-[#242933] rounded-xl h-52.5 flex flex-col items-center justify-center">
                        <h2 className="heading-font font-bold text-lg">
                            NOTHING HERE YET
                        </h2>
                        <p className="text-sm text-[#7d8491] mt-2">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/workouts"
                            className="mt-4 bg-[#CCFF00] text-black text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#b8e600] transition">
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    sortedData.map((workout) => (

                        <div
                            key={workout.id}
                            className="bg-[#13161c] border border-[#242933] rounded-xl px-3 py-3 flex items-center justify-between" >
                            <div className="flex items-center gap-3">
                                <div className="w-25 h-14 rounded-lg overflow-hidden bg-[#242933] shrink-0">
                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        width={50}
                                        height={50}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>

                                    <h2 className="heading-font text-sm font-bold uppercase">
                                        {workout.name}
                                    </h2>
                                    <p className="text-xs text-[#7d8491] mt-0.5">
                                        {workout.equipment}
                                    </p>

                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="flex items-center gap-1 text-[10px] text-[#d1d5db]">
                                            <FaRegClock
                                                size={10}
                                                className="text-[#CCFF00]"
                                            />
                                            {workout.duration || 0} min
                                        </span>
                                        <span className="flex items-center gap-1 text-[10px] text-[#d1d5db]">
                                            <HiOutlineFire
                                                size={12}
                                                className="text-[#CCFF00]"
                                            />
                                            {workout.caloriesBurned || 0} kcal
                                        </span>
                                        <span className="flex items-center gap-1 text-[10px] text-[#d1d5db]">
                                            <FaStar
                                                size={10}
                                                className="text-[#CCFF00]"
                                            />
                                            {workout.rating || 0}
                                        </span>
                                    </div>

                                </div>

                            </div>

                            <div className="flex items-center gap-2">

                                <Link href={`/workouts/${workout.id}`}>
                                    <button
                                        className="border border-[#303846] text-[#d1d5db] text-[10px] px-4 py-2 rounded-full hover:bg-[#242933] transition"
                                    >
                                        View Details
                                    </button>
                                </Link>

                                {activeTab === "today" ? (
                                    <button
                                        onClick={() => markAsDone(workout.id)}
                                        className="bg-[#CCFF00] text-black text-[10px] font-bold px-4 py-2 rounded-full hover:bg-[#b8e600] transition flex items-center gap-1">
                                        <span className="text-xs">
                                            ✓
                                        </span>
                                        Mark as Done
                                    </button>
                                ) : (
                                    ''
                                )}
                                <button
                                    onClick={() => removeWorkout(workout.id)}
                                    className="ml-1 text-[#697180] hover:text-white transition"
                                    aria-label="Remove workout" >
                                    <RxCross2 />
                                </button>
                            </div>
                        </div>

                    ))

                )}
            </div>

        </div>
    );
};

export default MyPlanPage; 