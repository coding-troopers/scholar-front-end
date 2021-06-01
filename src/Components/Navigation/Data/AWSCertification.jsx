import React, { Component } from 'react'
import {Sliders} from '../../../Components'
import classes from './Data.module.css'

export class AWSCertification extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h2 className={classes.headingh2}>Become an expert in cloud computing with AWS Certification</h2>
                <p className={classes.paragraphTagP}>Because Amazon Web Services is a constantly evolving cloud 
                ecosystem, staying up with new AWS services and features can be a chore. That’s why earning an 
                AWS certification is such a great IT career move. In the eyes of future employers, you are an 
                AWS authority.</p>
                <Sliders></Sliders>
            </div>
        )
    }
}

export default AWSCertification
