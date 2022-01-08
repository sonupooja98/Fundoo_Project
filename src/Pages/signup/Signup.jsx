import React, { Component } from "react";
import './Signup.cssn'
import { TextField } from "@material-ui/core";
export class Signup extends Component {
    render() {
        return (
            <div class="main-con">
                <div class="page">
                    <div class="left-con">
                        <p class="google">Google</p><br></br>
                        <p class="content">Create your Google Account</p><br></br>
                        <div class="text">
                            <TextField id="outlined-basic" label="FirstName" variant="outlined" />
                            <TextField id="outlined-basic" label="LastName" variant="outlined" />
                        </div><br></br>
                        <TextField id="outlined-basic" label="Gmail" variant="outlined" fullWidth helperText="You can use letters,numbers & periods" />
                        <p>Create a new Gmail address instead</p><br></br>
                        <div class="text1">
                            <TextField id="outlined-basic" label="Password" variant="outlined" helperText="Use 8 or more characters with a mix of letters,numbers & symbols" />
                            <TextField id="outlined-basic" label="Confirm" variant="outlined" />
                        </div><br></br>
                        <div class="password">
                            <input type="checkbox"></input>
                            <p class="pass">Show Password</p>
                        </div>
                        <div class="sign">
                            <p class="in">Sign in Instead</p>
                            <button class="Next">Next</button>

                        </div>
                    </div>
                </div>
                <div class="right-con">


                </div>
            </div>

        )
    }
}
export default Signup