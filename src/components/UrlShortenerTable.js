import React, { useEffect, useContext, } from 'react';
import { UrlContext } from "../context/UrlContext";
import { DialogContext } from "../context/DialogContext";
import BodyHeader from './BodyHeader';
import axios from 'axios';
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import Clear from '@material-ui/icons/Clear';
import DialogHandler from "./DialogHandler";


const columns = [
    { field: 'fullUrl', headerName: 'Full URL', sortable: true },
    { field: 'shorterUrl', headerName: 'Shorter URL', sortable: true },
];

function UrlShortenerTable() {

    const { urls, setUrls, removeUrl } = useContext(UrlContext);
    const { dialog, setDialog } = useContext(DialogContext);

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
            })
    }, []);

    return (
        <div>
            <BodyHeader text='URL List' />
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
                data={urls}
                icons={{
                    Clear: (props) => <Clear />,
                    Search: (props) => <SearchIcon />,
                    ResetSearch: (props) => <Clear />
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
            <DialogHandler />
        </div>
    );
}

export default UrlShortenerTable;
