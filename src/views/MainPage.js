import React, { useContext } from 'react';
import Header from '../components/Header';
import UrlShortenerCreate from '../components/forms/UrlShortenerCreate';
import UrlShortenerTable from '../components/UrlShortenerTable';
import { SnackbarContext } from '../context/SnackbarContext';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MainPage() {

    const { alert, setAlert } = useContext(SnackbarContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(prevState => {
            let alert = { ...prevState };
            alert.open = false;
            return alert;
        });

    };

    return (
        <React.Fragment>
            <Header />
            <UrlShortenerCreate />
            <UrlShortenerTable />
            <Snackbar open={alert.open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}

export default MainPage;
