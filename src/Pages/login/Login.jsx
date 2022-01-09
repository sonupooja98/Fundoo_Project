import React, { Component } from 'react'
import './Login.css'
import { TextField } from "@material-ui/core";
export class Login extends Component {
    render() {
        return (
            <div className="login-main">
        <div className="login-content">
            <div className="contenter1">
                <div className="fundoo">
                    <p style={{ color: 'blue' }} >G</p>
                    <p style={{ color: 'red' }}>o</p>
                    <p style={{ color: 'yellow' }}>o</p>
                    <p style={{ color: 'blue' }}>g</p>
                    <p style={{ color: 'green' }}>l</p>
                    <p style={{ color: 'red' }}>e</p>
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
