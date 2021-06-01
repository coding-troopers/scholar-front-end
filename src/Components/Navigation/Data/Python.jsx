import React, { Component } from 'react'
import { Sliders } from '../../../Components'
import classes from './Data.module.css'

export class Python extends Component {
    render() {
        return (
            <div>
                <div className={classes.container}>
                    <h3>Lead data-driven decisions with Data Science</h3>
                    <p>Data science is everywhere. Better data science practices are allowing corporations to cut unnecessary costs, automate computing, and analyze markets. Essentially, data science is the key to getting ahead in a competitive global climate.</p>
                    <h2 className={classes.headingh2}>Expand your career opportunities with Python</h2>
                    <p className={classes.paragraphTagP}>Whether you work in machine learning or finance,
                    or are pursuing a career in web development or data
                    science, Python is one of the most important skills
                    you can learn. Python's simple syntax is especially
                    suited for desktop, web, and business applications.
                    Python's design philosophy emphasizes readability and
                    usability. Python was developed upon the premise that
                    there should be only one way (and preferably one obvious way)
                    to do things, a philosophy that has resulted in a strict level
                    of code standardization. The core programming language is quite
                    small and the standard library is also large. In fact, Python's
                    large library is one of its greatest benefits, providing a variety
                    of different tools for programmers suited for many different tasks.</p>
                </div>
                <Sliders></Sliders>
            </div>
        )
    }
}

export default Python
