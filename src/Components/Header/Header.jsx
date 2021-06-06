/* eslint-disable no-unused-vars */
// created by Rahul Beniwal. This is header component 

import React from 'react'
import { FormControl, TextField, withStyles, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ShoppingCart } from '@material-ui/icons';
import CategoryIcon from '@material-ui/icons/Category';
import Notification from './Notification';
import styles from "./Header.module.css";


const useStyle = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: '10px'
    },
    defaultHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgb(246, 245, 244)",
        borderRadius: "99px",
        boxShadow: "10px 10px 8px rgb(233, 243, 227)"
    },
    linkStyle: {
        textDecoration: "none"
    },
    label: {
        textTransform: 'capitalize',
    },
}));


function Header() {



    const classes = useStyle();

    return (
        <div className={styles.header}>
            <div><Notification/></div>
            <div className={classes.defaultHeader}>
                <div>Logo</div>
                <Button  className={classes.linkStyle}><CategoryIcon /></Button>
                <form>
                    <from noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search Courses" variant="standard" />
                    </from>
                </form>
                <Button> <ShoppingCart /> </Button>
                <div className="signupOptions">
                    <Button variant="outlined" color="primary" className={classes.root}>Login</Button>
                    <Button variant="outlined" color="primary" className={classes.root}>Signup</Button>
                </div>
            </div>
        </div>
    )
}

export default Header
