'use client'

import React, { createContext, useState } from 'react';

export const WorkoutsContext = createContext({});

const WorkoutsProvider = ({children}) => {

    const [todaysPlan, setTodaysPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        saved,
        setSaved
    }

    return (
        <WorkoutsContext.Provider value={sharedData}>
            {children}
        </WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;
