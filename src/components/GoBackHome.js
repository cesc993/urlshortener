import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Home from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";

const styles = {
    button: {
        justifyContent: 'center'
    }
};

function GoBackHome(props) {

    const history = useHistory();

    const { classes } = props;

    return (
        <React.Fragment>
            <Box textAlign='center'>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    startIcon={<Home />}
                    onClick={() => {
                        if (history != null) {
                            history.push("/");
                        } else {
                            window.location.href = "/";
                        }
                    }}
                >
                    Go back to home
                </Button>
            </Box>
        </React.Fragment >
    );
}


export default withStyles(styles)(GoBackHome);