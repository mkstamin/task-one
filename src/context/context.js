import React, { useState } from 'react';
import demoData from '../data/data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [data, setData] = useState(demoData);
    const [value, setValue] = useState(0);

    const details = data[value];

    return (
        <AppContext.Provider
            value={{
                data,
                setData,
                value,
                setValue,
                details,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
