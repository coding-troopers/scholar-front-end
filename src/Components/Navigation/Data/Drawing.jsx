import React, { Component } from 'react'
import {Sliders} from '../../../Components'
import classes from './Data.module.css'

export class Drawing extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h2 className={classes.headingh2}>Expand your creative skillset with Drawing</h2>
                <p className={classes.paragraphTagP}>Besides being the foundation upon which most 
                art forms are built, drawing is also an excellent way to relieve stress and feed 
                your inner creativity. Drawing teaches us how to be observant, develop an attention 
                to detail, and express ourselves.</p>
                <Sliders></Sliders>
            </div>
        )
    }
}

export default Drawing
