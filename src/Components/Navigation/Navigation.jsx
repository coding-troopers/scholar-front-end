import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React, { Component } from 'react'
import {Python,Excel,WebDevelopment,JavaScript,DataScience,AWSCertification,Drawing} from '..'
import classes from './Navigation.module.css';


export class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
             value: "Python"
        }
    }
    
    change=(event ,val)=>{
        console.log(val)
        this.setState({
            value:val
        })
    }

    render() {
        var message
        if(this.state.value==="Python"){
            message=<Python/>
            
        }else if(this.state.value==="Excel"){
            message=<Excel/>
        }else if(this.state.value==="Web Development"){
            message=<WebDevelopment/>
        }else if(this.state.value==="JavaScript"){
            message=<JavaScript/>
        }else if(this.state.value==="DataScience"){
            message=<DataScience/>
        }else if(this.state.value==="AWS Certification"){
            message=<AWSCertification/>
        }else if(this.state.value==="Drawing"){
            message=<Drawing/>
        }
        return (
            <div className={classes.mainContainer}>
                <BottomNavigation value={this.state.value} showLabels onChange={this.change} class={classes.MuiBottomNavigation}>
                    <BottomNavigationAction label="Python" value="Python"></BottomNavigationAction>
                    <BottomNavigationAction label="Excel" value="Excel"></BottomNavigationAction>
                    <BottomNavigationAction label="Web Development" value="Web Development" ></BottomNavigationAction>
                    <BottomNavigationAction label="JavaScript" value="JavaScript"></BottomNavigationAction>
                    <BottomNavigationAction label="DataScience" value="DataScience"></BottomNavigationAction>
                    <BottomNavigationAction label="AWS Certification" value="AWS Certification"></BottomNavigationAction>
                    <BottomNavigationAction label="Drawing" value="Drawing"></BottomNavigationAction>
                </BottomNavigation>
                <div className={classes.dataDiv}>
                    {message}
                </div>
                
            </div>
        )
    }
}



export default Navigation


