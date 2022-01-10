import React, { Component } from 'react'
import './Reseta.css';
import { TextField } from "@material-ui/core";
export class Reseta extends Component {
    render() {
        return (
            <div className="reset-main">
                <div className="reset">
                    <div className="part-one">
                        <div className="Fundoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        < p className="email">Find your email</p>
                        <p className="password">Enter password</p>
                    </div>
                    <div className="password">
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
                    </div>
                    <div className="confirm-password">
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth />
                    </div>
                    <button className="button">Next</button>
                </div>
            </div>
        )
    }
}

export default Reseta
