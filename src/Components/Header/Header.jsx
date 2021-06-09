/* eslint-disable no-unused-vars */
// created by Rahul Beniwal. This is header component 

import React from 'react'
import { FormControl, TextField, withStyles, Button, IconButton } from '@material-ui/core';
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
        height: 30,
        padding: '0 10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: '10px'
    },
    defaultHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius : "14px",
        backgroundImage: "linear-gradient(to left, #1f3a64, #00678c, #0094a5, #57c1b0, #a8ebb6)",
        marginBottom : "10px",
        transition : "border 0.5s",
        transitionTimingFunction : "ease-out",
        "&:hover" : {
            zIndex : "1",
            border : "10px solid white",

        }
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
                <IconButton>
                <div className={styles.logo}><img className={styles.logoImage} src={require("../../data/logoUnfinished.jpg").default} alt="logo"/></div>
                </IconButton>
                <Button  className={classes.linkStyle}><CategoryIcon /></Button>
                <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search Courses" variant="filled" />
                </form>
                <Button> <ShoppingCart /> </Button>
                <div className={styles.signupOptions}>
                    <Button variant="contained"  color="primary" className={classes.root}>Login</Button>
                    <Button variant="contained" color="primary" className={classes.root}>Signup</Button>
                </div>
            </div>
        </div>
    )
}

export default Header
