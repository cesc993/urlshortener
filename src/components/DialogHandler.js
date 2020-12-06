import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContext } from "../context/DialogContext";
import { UrlContext } from '../context/UrlContext';
import axios from 'axios';

export default function DialogHandler() {
    const { dialog, setDialog } = useContext(DialogContext);
    const { removeUrl } = useContext(UrlContext);

    const handleClose = () => {
        setDialog({ open: false, selectedId: null });
    };

    const deleteUrl = (id) => {
        axios.delete(`/api/${id}`)
            .then(res => {
                if (res != null && res.status == 204) {
                    removeUrl(id);
                    handleClose();
                }
            })
    }

    function displayDialog() {
        if (dialog != null && dialog.open && dialog.selectedId != null) {
            return (
                <Dialog
                    open={dialog}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        URL Delete
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete this URL?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { deleteUrl(dialog.selectedId) }} color="primary">
                            Yes
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            );
        } else {
            return null;
        }
    }

    return (
        <div>
            {displayDialog()}
        </div>
    );
}