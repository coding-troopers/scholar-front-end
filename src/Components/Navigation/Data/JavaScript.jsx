import React, { Component } from 'react'
import {Sliders} from '../../../Components'
import classes from './Data.module.css'

export class JavaScript extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h2 className={classes.headingh2}>Grow your software development skills with JavaScript</h2>
                <p className={classes.paragraphTagP}>JavaScript is one of the most ubiquitous programming 
                languages on the planet, mostly because it's the backbone of interactive web applications. 
                On top of that, JavaScript is a great language for beginners because it gives them a chance 
                to write code that does something visual, which is exciting and helpful when you're just getting 
                started as a programmer. Dynamic content is the hot topic in web development right now. Dynamic content 
                refers to content that constantly changes and adapts to specific users whenever possible. For example, 
                JavaScript can be used to determine if a website visitor is using a computer or a mobile device before 
                deciding whether or not to render the mobile version of the website. It's these small things behind the 
                scenes that create genuine value in using JavaScript to create dynamic web pages.</p>
                <Sliders></Sliders>
            </div>
        )
    }
}

export default JavaScript
