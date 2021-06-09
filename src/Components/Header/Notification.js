/* eslint-disable no-unused-vars */
import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Alert, AlertTitle} from "@material-ui/lab"
import Collapse from "@material-ui/core/Collapse"
import CloseIcon from "@material-ui/icons/Close"
import { IconButton } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    root : {
        marginBottom : "10px",
        textAlign : "center",
        margin: "0 auto",
        width : "40%",
        minWidth : "400px",
        transition : "width 0.5s",
        '& > * + *' : {
            marginTop : theme.spacing(2)
        },
        '&:hover' : {
            width : "100%",
        }
    },
    inform : {
        textAlign : "center",
        margin : "10px" 

    }
}))


function Notification() {
    const [open, setOpen] = React.useState(true);

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Collapse in={open}>
        <Alert severity="info" action={
            <IconButton aria-label="close" size="small" onClick={()=>{
                setOpen(false);
            }}>
                <CloseIcon fontSize="inherit"/>
            </IconButton>
        }>
            <AlertTitle>Price Drop</AlertTitle>
            <p className={classes.inform}>All Courses At <strong> 399 </strong>/-</p>
        </Alert>
        </Collapse>
    </div>
    )
}

export default Notification
