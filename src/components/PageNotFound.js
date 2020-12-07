import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import GoBackHome from './GoBackHome';

const styles = {
    header: {
        margin: 15,
        textAlign: 'center'
    }
};

function PageNotFound(props) {

    const { classes } = props;

    return (
        <div>
            <Header />
            <h1 className={classes.header}> Error 404 page not found ! </h1>
            <GoBackHome />
        </div >
    );
}


export default withStyles(styles)(PageNotFound);