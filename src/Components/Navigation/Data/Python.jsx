import React, { Component } from 'react'
import {Sliders} from '../../../Components'
import classes from './Data.module.css'

export class Python extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h3>Lead data-driven decisions with Data Science</h3>
                <p>Data science is everywhere. Better data science practices are allowing corporations to cut unnecessary costs, automate computing, and analyze markets. Essentially, data science is the key to getting ahead in a competitive global climate.</p>
                <Sliders></Sliders>
            </div>
        )
    }
}

export default Python
