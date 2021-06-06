import React, { Component } from 'react'
import {Sliders} from '../../../Components'
import classes from './Data.module.css'

export class Excel extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h2 className={classes.headingh2}>Analyze and visualize data with Excel</h2>
                <p className={classes.paragraphTagP}>Regardless of the industry you work in, 
                Microsoft Office Excel is an invaluable spreadsheet program for organizing and 
                representing data. Excel offers functions, formulas, and pivot tables to help you 
                aggregate and then analyze large sets of information. Excel first truly appeared on 
                the scene way back in 1987, when a version was released for Windows. Excel is a complex 
                and powerful software today, and it gives you a great degree of control over the data in 
                your spreadsheet. Yet, it's easy for even beginners to learn it.</p>
                <Sliders></Sliders>
            </div>
        )
    }
}

export default Excel
