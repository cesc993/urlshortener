import React, { useEffect, useContext } from 'react';
import { UrlContext } from "../context/UrlContext";
import { DialogContext } from "../context/DialogContext";
import BodyHeader from './BodyHeader';
import axios from 'axios';
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import Clear from '@material-ui/icons/Clear';
import DialogHandler from "./DialogHandler";
import { SnackbarContext } from '../context/SnackbarContext';


function UrlShortenerTable() {

    const { urls, setUrls } = useContext(UrlContext);
    const { setDialog } = useContext(DialogContext);
    const { setAlert } = useContext(SnackbarContext);

    useEffect(() => {
        axios.get(`/api`)
            .then(res => {
                if (res != null && res.data != null) {
                    res.data = res.data.map((item) => {
                        item.shorterUrl = window.location.host + "/" + item.shorterUrl;
                        return item;
                    });
                    setUrls(res.data);
                }
            }, (err) => {
                setAlert({ open: true, severity: 'error', message: 'ERROR : Could not retrieve data' });
            })
    }, []);

    function renderTable() {
        let data = [];
        if (urls != null && urls.length > 0 && urls[0].id != null) {
            data = urls;
        }

        return (
            <MaterialTable
                title="Table"
                style={{ margin: 15 }}
                columns={[
                    {
                        title: "Full URL",
                        field: "fullUrl",
                        headerStyle: {
                            backgroundColor: "white",
                            color: "black"
                        }
                    },
                    {
                        title: "Shorter URL",
                        field: "shorterUrl",
                        headerStyle: {
                            backgroundColor: "white",
                            color: "black"
                        }
                    }
                ]}
                data={data}
                icons={{
                    Clear: () => <Clear />,
                    Search: () => <SearchIcon />,
                    ResetSearch: () => <Clear />
                }}
                actions={[
                    {
                        icon: () => <DeleteIcon />,
                        tooltip: "Delete Url",
                        onClick: (event, rowData) => {
                            setDialog({ open: true, selectedId: rowData.id });
                        }
                    }
                ]}
                options={{
                    search: true,
                    sorting: true,
                    headerStyle: {
                        backgroundColor: "white",
                        color: "black"
                    }
                }} />
        );

    }

    return (
        <div>
            <BodyHeader text='URL List' />
            { renderTable()}
            <DialogHandler />
        </div>
    );
}

export default UrlShortenerTable;
