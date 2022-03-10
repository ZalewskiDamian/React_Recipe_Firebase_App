import React, {createContext, useState} from 'react';

export const CaloriesContext = createContext();

export const CaloriesProvider = props => {
    const [demand, setDemand] = useState('');
	const [totalDemand, setTotalDemand] = useState('');
    const [loseCalories, setLoseCalories] = useState('');
	const [gainCalories, setGainCalories] = useState('');
	const [toggle, setToggle] = useState('');
    const [user, setUser] = useState({});

    return (
        <CaloriesContext.Provider value={{demand, setDemand, totalDemand, setTotalDemand, loseCalories, setLoseCalories, gainCalories, setGainCalories, toggle, setToggle, user, setUser}}>
            {props.children}
        </CaloriesContext.Provider>
    )
}