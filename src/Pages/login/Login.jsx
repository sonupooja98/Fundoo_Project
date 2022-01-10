import React, { Component } from 'react'
import './Login.css'
import { TextField } from "@material-ui/core";
export class Login extends Component {
    render() {
        return (
            <div className="login-main">
        <div className="login-content">
            <div className="container1">
                <div className="fundoo">
                    <p style={{ color: 'blue' }} >F</p>
                    <p style={{ color: 'red' }}>u</p>
                    <p style={{ color: 'yellow' }}>n</p>
                    <p style={{ color: 'blue' }}>d</p>
                    <p style={{ color: 'green' }}>o</p>
                    <p style={{ color: 'red' }}>o</p>
                </div>
                <p className="sign-in">Sign in</p>
                < p className="create-account">Use your fundoo Account</p>
            </div>
            <div className="email">
                <TextField id="outlined-basic" label="Email or phone" variant="outlined" helperText="Forgot Email?" fullWidth />
            </div>
            <br></br>
            <div className="password">
                <TextField id="outlined-basic" label="Password" variant="outlined" helperText="Forgot Password" fullWidth />

            </div>
            <div className="computer">
                <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                <p className="more">Learn more</p>
            </div>
            <div className="create">
                <p className="c-account" >Create account ?</p>
                <div className="blue-box">
                    <button className="button">Next</button>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Login
