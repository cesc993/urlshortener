import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';

function Redirect() {

    const { shorterUrl } = useParams();
    const [pageFound, setPageFound] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            axios.get(`/api/${shorterUrl}`)
                .then((res) => {
                    if (res.data != null && res.data.fullUrl != null) {
                        setPageFound(true);
                        window.location.replace(res.data.fullUrl);
                    } else {
                        setPageFound(false);
                    }
                }, (err) => {
                    setPageFound(false);
                });
        }
        fetchData();
    }, [shorterUrl])

    function redirectHandler() {
        if (!pageFound) {
            return (
                <React.Fragment>
                    <PageNotFound />
                </React.Fragment>
            );
        } else {
            return (
                <div style={{ margin: 15 }}>
                    <Header />
                    <h1 style={{ textAlign: 'center' }}> Redirecting, please wait </h1>
                    <LinearProgress color="secondary" />
                </div>
            );
        }
    }

    return (
        <React.Fragment>
            { redirectHandler()}
        </React.Fragment>
    );
}

export default Redirect;