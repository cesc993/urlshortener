import React, { createContext, useState } from 'react';

export const UrlContext = createContext();

const UrlContextProvider = (props) => {
    const [urls, setUrls] = useState([
        { fullUrl: null, shorterUrl: null, id: null },
    ]);
    const addUrl = (newurl) => {
        newurl.shorterUrl = window.location.host + "/" + newurl.shorterUrl;
        setUrls([...urls, newurl])
    }
    const removeUrl = (id) => {
        setUrls(urls.filter(url => url.id !== id));
    }
    return (
        <UrlContext.Provider value={{ urls, setUrls, addUrl, removeUrl }} >
            {props.children}
        </UrlContext.Provider>
    );
}

export default UrlContextProvider;
