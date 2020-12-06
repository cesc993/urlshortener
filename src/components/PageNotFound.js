import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Home from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const styles = {
    header: {
        margin: 15,
        textAlign: 'center'
    },
    button: {
        justifyContent: 'center'
    }
};

function PageNotFound(props) {

    const { classes } = props;
    const history = useHistory()

    return (
        <div>
            <h1 className={classes.header}> Error 404 page not found ! </h1>
            <Box textAlign='center'>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    startIcon={<Home />}
                    onClick={() => {
                        history.goBack()
                    }}
                >
                    Go back to home
            </Button>
            </Box>
        </div >
    );
}


export default withStyles(styles)(PageNotFound);