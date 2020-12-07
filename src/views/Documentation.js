
import React from 'react';
import Header from '../components/Header';
import { withStyles } from '@material-ui/core/styles';
import GoBackHome from '../components/GoBackHome';

const styles = {
    container: {
        margin: 15
    }
};


function Documentation(props) {

    const { classes } = props;

    return (
        <React.Fragment>
            <Header />
            <div className={classes.container}>
                <h3>
                    Project documentation
                </h3>
                <h4>
                    Available backend web calls
                </h4>
                <p>
                    GET /api -{">"} get all urls inside the application
                </p>
                <p>
                    GET /api/:shorterUrl -{">"} get specific url with the given shorterUrl
                </p>
                <p>
                    POST /api -{">"} create url inside the application, body: {'{'}"fullUrl": "xxx"{'}'}
                </p>
                <p>
                    DELETE /api/:id -{">"} delete url with the given id
                </p>
                <h4>
                    Available client web pages
                </h4>
                <p>
                    / -{">"} home page of the web application
                </p>
                <p>
                    /docs -{">"} current documentation link
                </p>
                <p>
                    /:shorterUrl -{">"} link to get redirected to the website associated if found, otherwise page not found
                </p>
                <GoBackHome />
            </div>
        </React.Fragment>
    );
}

export default withStyles(styles)(Documentation);