import React from 'react'
import  loginImg from '../../data/Images/login.svg'

export default class Signup extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <div className="base-container">
                <div className="header">Register</div>
                <div className="content">
                    <img src={loginImg}/>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter UserName"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter Password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter Email"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn" type="button">Register</button>
                </div>
            </div>
        </div>
        }
}