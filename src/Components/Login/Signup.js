import React from 'react'
import loginImg from '../../data/Images/login.svg'
import './style.scss'


export default class Signup extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
   const signup = {
    marginTop : "-9px"
}
        return (
            <div className="login">
                <div className="base-container">
                    <div className="header">Register</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div style={signup} className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="Enter User Name" />
                            </div>
                            <div style={signup} className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Enter Password" />
                            </div>
                            <div style={signup} className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Enter Email" />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                                <button type="submit" className="btn">Register</button>
                    </div>
                </div>
            </div>
        )
    }
}