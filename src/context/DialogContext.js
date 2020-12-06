import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const DialogContext = createContext();

const DialogContextProvider = (props) => {
    const [dialog, setDialog] = useState([{
        open: false,
        selectedId: null
    }]);
    return (
        <DialogContext.Provider value={{ dialog, setDialog }} >
            {props.children}
        </DialogContext.Provider>
    );
}

export default DialogContextProvider;
