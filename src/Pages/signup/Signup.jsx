import React, { Component } from "react";
import './Signup.css'
import { TextField } from "@material-ui/core";
import logo from '../signup/assest/googleLogo.png'
// import { Link } from "react-router-dom";
export class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FirstValue: '',
            LastValue: '',
            emailId: '',
            passId: '',
            confromId: '',
            FirstValueError: false,
            LastValueError: false,
            emailIdError: false,
            passIdError: false,
            confromIdError: false
        }


    }
    Data = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.FirstValueError = this.state.FirstValue === '' ? true : false;
        error.LastValueError = this.state.LastValue === '' ? true : false;
        error.emailIdError = this.state.emailId === '' ? true : false;
        error.passIdError = this.state.passId=== '' ? true : false;
        error.confromIdError = this.state.confromId === '' ? true : false;

        this.setState({
            ...error
        })

        
        return isError = error.FirstValueError || error.LastValueError || error.emailId || error.passId || error.confromId;
    }

    next = () => {
        var validated = this.validation();
        if (validated) {
            console.log("sucessfull")
        } else console.log("something missing")
    }

    render() {
        return (
            <div class="main-page">
                <div class="main-container">
                    <div class="left-part">
                        <div class="google-title">
                            <p>Fundoo</p>
                        </div>
                        <div class="heading">
                            <p>Create your Google Account</p>
                        </div>
                        <div class="name-row">
                            <div class="first-name">  <TextField name="FirstValue" id="outlined-basic" label="First Name" variant="outlined"
                             error = {this.state.FirstValueError}
                             helperText = {this.state.FirstValueError ? "First Name requried" : " "} onChange={e=>this.Data(e)}
                             onChange={e=>this.Data(e)}/> </div>
                            <div class="last-name"> <TextField name="LastValue" id="outlined-basic" label="Last Name" variant="outlined"
                             error = {this.state.LastValueError}
                             helperText = {this.state.LastValueError ? "Last Name requried" : " "} onChange={e=>this.Data(e)}
                             onChange={e=>this.Data(e)}/>  </div>
                        </div>
                        <div class="user-row">
                            <TextField name="emailId" id="outlined-basic" label="Your email address" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods" 
                             error = {this.state.emailIdError}
                             helperText = {this.state.emailIdError ? "Email requried" : ""} onChange={e=>this.Data(e)}
                             onChange={e=>this.Data(e)}/>
                        </div>
                        <div class="use_current">
                            <p>use the current email address instead</p>
                        </div>
                        <div class="password-row">
                            <div class="password">  <TextField name="passId" id="outlined-basic" label="Password" variant="outlined"
                             error = {this.state.passIdError}
                             helperText = {this.state.passIdError ? "password requried" : " "} onChange={e=>this.Data(e)}
                             onChange={e=>this.Data(e)}/> </div>
                            <div class="c-password"> <TextField name="confromId" id="outlined-basic" label="Confirm Password" variant="outlined" 
                             error = {this.state.confromIdError}
                             helperText = {this.state.confromIdError ? "confromId requried" : " "} onChange={e=>this.Data(e)}
                             onChange={e=>this.Data(e)}/></div>
                        </div>
                        <div class="checkbox">
                            <input class="check1" type="checkbox"></input>
                            <p class="showbox">Show Password</p>
                        </div>
                        <div className="last-section">
                            <div class="sign-instead">
                            {/* <Link to="/login"> */<p className="login">Sign in Instead</p> /*</Link> */}
                            </div>
                            <div class="next-button">
                                <button className="button1" onClick={this.next}>Next</button>
                            </div>
                        </div>
                    </div>

                    <div class="right-part">
                        <img className="logo1" src={logo} alt="this is logo"></img>
                        < p className="logo-text">One account. All of Google working for you.</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Signup