import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = {
};

function BodyHeader(props) {

    const { classes, text } = props;

    return (
        <Box m={1} p={1}>
            <Typography variant="h6" className={classes.title} align="left">
                {text}
            </Typography>
        </Box>
    );
}

export default withStyles(styles)(BodyHeader);