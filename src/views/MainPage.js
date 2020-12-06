import React from 'react';
import Header from '../components/Header';
import UrlShortenerCreate from '../components/forms/UrlShortenerCreate';
import UrlShortenerTable from '../components/UrlShortenerTable';

function MainPage() {
    return (
        <React.Fragment>
            <Header />
            <UrlShortenerCreate />
            <UrlShortenerTable />
        </React.Fragment>
    );
}

export default MainPage;
