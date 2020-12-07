import React, { createContext, useState } from 'react';

export const SnackbarContext = createContext();

const SnackbarContextProvider = (props) => {
    const [alert, setAlert] = useState([{
        open: false,
        severity: '',
        message: ''
    }]);
    return (
        <SnackbarContext.Provider value={{ alert, setAlert }} >
            {props.children}
        </SnackbarContext.Provider>
    );
}

export default SnackbarContextProvider;
