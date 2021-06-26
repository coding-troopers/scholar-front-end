import React from 'react'
import loginImg from '../../data/Images/login.svg'
import './style.scss'


export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="login">
                <div className="base-container" ref={this.props.containerRef}>
                    <div className="header">Login</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="Enter User Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Enter Password" />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">Login</button>
                    </div>
                </div>
            </div>
        )
    }
}