import React, { Component } from 'react'
import './Reseta.css';
import { TextField } from "@material-ui/core";
// import { Link } from "react-router-dom";
export class Reseta extends Component {

    constructor(props){
        super(props)
    
    
        this.state={
            resetPass:'',
            confirmResetPass:'',
            resetPassError:false,
            confirmResetPassError:false,
        }
    }
    
    checkData =(e) =>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    
    validation =() =>{
        let isError = false;
        const error = this.state;
        error.resetPassError = this.state.resetPass=== '' ? true :false;
        error.confirmResetPassError = this.state.confirmResetPass === '' ? true : false;
    
    
        this.setState({
            ...error
        })
        return isError = error.resetPassError || error.confirmResetPassError;
    }
    
    
    
    
    next = () =>{
        var validated = this.validation();
        if(validated){
            console.log("Successfull")
        }
    }
    












    render() {
        return (
            <div className="R-main">
                <div className="R">
                    <div className="one">
                        <div className="Fu">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                    
                        < p className="e">Find your email</p>
                        <p className="pa">Enter password</p>
                    </div>
                    <div className="pas">
                        <TextField name="resetPass" id="outlined-basic" label="Password" variant="outlined" fullWidth 
                         error={this.state.resetPassError}
                         helperText={this.state.resetPassError ? "Password Required" : ""}
                         onChange={e=>this.checkData(e)} />
                    </div>
                    <div className="cp">
                        <TextField name="confirmResetPass" id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth 
                         error={this.state.confirmResetPassError}
                         helperText={this.state.confirmResetPassError ? "Password Required" : ""}
                         onChange={e=>this.checkData(e)} />
                    </div>
                    {/* <Link to="./forgot">*/ <button className="b"  onClick={this.next} >Next</button>/*</Link> */}
                </div>
            </div>
        )
    }
}

export default Reseta
