import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React, { Component } from 'react'
import Sliders from '../Sliders/Sliders.jsx'

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
            message=<Sliders/>
            
        }else if(this.state.value==="Excel"){
            message=<Sliders/>
        }else if(this.state.value==="Web Development"){
            message=<Sliders/>
        }else if(this.state.value==="JavaScript"){
            message=<Sliders/>
        }else if(this.state.value==="DataScience"){
            message=<Sliders/>
        }else if(this.state.value==="AWS Certification"){
            message=<Sliders/>
        }else if(this.state.value==="Drawing"){
            message=<Sliders/>
        }
        return (
            <div>
                <BottomNavigation value={this.state.value} showLabels onChange={this.change}>
                <BottomNavigationAction label="Python" value="Python"></BottomNavigationAction>
                <BottomNavigationAction label="Excel" value="Excel"></BottomNavigationAction>
                <BottomNavigationAction label="Web Development" value="Web Development" ></BottomNavigationAction>
                <BottomNavigationAction label="JavaScript" value="JavaScript"></BottomNavigationAction>
                <BottomNavigationAction label="DataScience" value="DataScience"></BottomNavigationAction>
                <BottomNavigationAction label="AWS Certification" value="AWS Certification"></BottomNavigationAction>
                <BottomNavigationAction label="Drawing" value="Drawing"></BottomNavigationAction>
                </BottomNavigation>
                {message}
            </div>
        )
    }
}



export default Navigation


