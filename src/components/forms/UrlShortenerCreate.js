import React, { useContext, useState, useRef } from 'react';
import * as Yup from 'yup';
import Box from '@material-ui/core/Box';
import { useFormik } from 'formik';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import BodyHeader from '../BodyHeader';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Clear from '@material-ui/icons/Clear';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { UrlContext } from "../../context/UrlContext";

const styles = {
    inputField: {
        textAlign: 'left'
    }
};

function UrlShortenerCreate(props) {

    const { classes } = props;
    const textFieldRef = useRef();
    const { urls, setUrls, addUrl } = useContext(UrlContext);

    const matches = useMediaQuery('(min-width:700px)');

    function clearForm() {
        formik.resetForm();
        formik.setFieldValue('fullUrl', '');
        formik.setFieldValue('shorterUrl', '');
    }

    function responsiveLayoutForm() {

        let direction = "row";
        let arrowForward = true;

        if (matches) {
            direction = "row";
        } else {
            direction = "column";
            arrowForward = false;
        }

        return (
            <React.Fragment>
                <Grid container direction={direction} spacing={1}>
                    <Box m={1} p={1}>
                        <TextField
                            className={classes.inputField}
                            id="outlined-basic"
                            name="fullUrl"
                            label="Full URL"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.fullUrl}
                        />
                        {formik.touched.fullUrl && formik.errors.fullUrl ? (
                            <div style={{ color: 'red', marginTop: 8 }}>{formik.errors.fullUrl}</div>
                        ) : null}
                    </Box>
                    <Box m={1} p={1}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="medium"
                            startIcon={arrowForward ? <ArrowForward /> : <ArrowDownward />}
                        >
                            Convert
                    </Button>
                    </Box>
                    <Box m={1} p={1}>
                        <TextField
                            disabled
                            className={classes.inputField}
                            id="standard-disabled"
                            name="shorterUrl"
                            label="Shorter URL"
                            variant="outlined"
                            inputRef={textFieldRef}
                            onChange={formik.handleChange}
                            defaultValue=" "
                            value={formik.values.shorterUrl}
                        />
                    </Box>
                </Grid>
                <Grid >
                    <Box m={1} p={1}>
                        <Button
                            onClick={clearForm}
                            variant="contained"
                            color="primary"
                            size="medium"
                            startIcon={<Clear />}
                        >
                            Clear form
                        </Button>
                    </Box>
                </Grid>
            </React.Fragment >
        );
    }

    const formik = useFormik({
        initialValues: {
            fullUrl: '',
        },
        validationSchema: Yup.object({
            fullUrl: Yup.string()
                .url()
                .required('Required')
        }),
        onSubmit: (values) => {
            values.baseUrl = window.location.host + "/";
            axios.post(`/api`, values)
                .then(res => {
                    if (res != null && res.data != null) {
                        formik.setFieldValue('shorterUrl', window.location.host + "/" + res.data.shorterUrl);
                        addUrl(res.data);
                        textFieldRef.current.focus();
                    }
                })
        },
    });

    return (


        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>

                <BodyHeader text='URL Creation Form' />

                {responsiveLayoutForm()}

            </form>
        </React.Fragment>
    );
}

export default withStyles(styles)(UrlShortenerCreate);