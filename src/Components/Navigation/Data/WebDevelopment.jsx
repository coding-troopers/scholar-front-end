import React, { Component } from 'react'
import {Sliders} from '../../../Components'
import classes from './Data.module.css'

export class WebDevelopment extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h2 className={classes.headingh2}>Build websites and applications with Web Development</h2>
                <p className={classes.paragraphTagP}>The world of web development is as wide as the internet 
                itself. Much of our social and vocational lives play out on the internet, which prompts new 
                industries aimed at creating, managing, and debugging the websites and applications that we 
                increasingly rely on.</p>
                <Sliders></Sliders>
            </div>
        )
    }
}

export default WebDevelopment
