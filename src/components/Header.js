import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
    appbar: {
        alignItems: 'center',
    }
};

function Header(props) {

    const { classes } = props;

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Typography variant="h5" >
                    Bravo sconto project
                </Typography>
            </Toolbar>
        </AppBar>
    );
}


export default withStyles(styles)(Header);