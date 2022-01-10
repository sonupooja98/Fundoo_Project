import React, { Component } from "react";
import '../forgotPassword/Forgot.css'
import { TextField } from "@material-ui/core";

export class Forgot extends Component {
    render() {
        return (
            <div className="forgot-main">
                <div className="forgot">
                    <div className="first-part">
                        <div className="Fundoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        < p className="Email">Find your email</p>
                        <p className="phoneNumber">Enter your phone phone or recovery email</p>
                    </div>
                    <div className="Num-or-Email">
                        <TextField id="outlined-basic" label="Phone number or email" variant="outlined" fullWidth />
                    </div>
                    <button className="button">Next</button>
                </div>
            </div>
        )
    }
}

export default Forgot