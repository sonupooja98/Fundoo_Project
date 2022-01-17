import React, { Component } from "react";
import './Signup.css'
import { TextField } from "@material-ui/core";
import logo from '../signup/assest/googleLogo.png'
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";

const service = new UserService();

export class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstValue: '',
           lastValue: '',
           email: '',
            passId: '',
            confromId: '',
            firstValueError: false,
           lastValueError: false,
           emailError: false,
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
        error.firstValueError = this.state.firstValue === '' ? true : false;
        error.lastValueError = this.state.lastValue === '' ? true : false;
        error.emailError = this.state.email === '' ? true : false;
        error.passIdError = this.state.passId === '' ? true : false;
        error.confromIdError = this.state.confromId === '' ? true : false;

        this.setState({
            ...error
        })


        return isError = error.firstValueError || error.lastValueError || error.email || error.passId || error.confromId;
    }








    next = () => {
        var validated = this.validation();
        let request;
        if (validated) {
            console.log("sucessfull");
            request = {
                "firstName": this.state.firstValue,
                "lastName": this.state.lastValue,
                "email": this.state.email,
                "password": this.state.passId,
                "service": "advance"
            };
            console.log("signup done successfully", request);

            service.Registeration(request)
                .then(res => {
                    console.log(res);
                    this.setState({
                        firstValue: '',
                        lastName: '',
                        email: '',
                         passId: '',
                        confromId: ''
                    })
                    this.props.history.push("/login");
                })
                .catch(err => {
                    console.log(err);
                })


        }
        else {
            console.log("sucessfull");
        }
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
                            <div class="first-name">  
                            <TextField name="firstValue" id="outlined-basic" label="First Name" variant="outlined"
                                error={this.state.firstValueError}
                                helperText={this.state.firstValueError ? "First Name requried" : " "} 
                                onChange={e => this.Data(e)} /> </div>
                            <div class="last-name">
                                 <TextField name="lastValue" id="outlined-basic" label="Last Name" variant="outlined"
                                error={this.state.lastValueError}
                                helperText={this.state.lastValueError ? "Last Name requried" : " "} 
                                onChange={e => this.Data(e)} />  </div>
                        </div>
                        <div class="user-row">
                            <TextField name="email" id="outlined-basic" label="Your email address" variant="outlined" fullWidth 
                                error={this.state.emailError}
                                helperText={this.state.emailError ? "Email requried" : ""}
                                onChange={e => this.Data(e)} />
                        </div>
                        <div class="use_current">
                            <p>use the current email address instead</p>
                        </div>
                        <div class=" passId-row">
                            <div class="passId">  <TextField name="passId" id="outlined-basic" label=" passId" variant="outlined"
                                error={this.state.passIdError}
                                helperText={this.state.passIdError ? " passId requried" : " "} 
                                onChange={e => this.Data(e)} /> </div>
                            <div class="c-passId"> <TextField name="confromId" id="outlined-basic" label="Confirm  passId" variant="outlined"
                                error={this.state.confromIdError}
                                helperText={this.state.confromIdError ? "confromId requried" : " "} 
                                onChange={e => this.Data(e)} /></div>
                        </div>
                        <div class="checkbox">
                            <input class="check1" type="checkbox"></input>
                            <p class="showbox">Show  passId</p>
                        </div>
                        <div className="last-section">
                            <div class="sign-instead">
                                <Link to="/login"><p className="login">Sign in Instead</p> </Link>
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