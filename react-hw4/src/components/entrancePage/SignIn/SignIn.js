import React, {Component} from 'react';
import Icon from './../padlock.svg';
import {NavLink} from 'react-router-dom';
import { fade } from '@material-ui/core';


class SignIn extends Component { 

    state = { 
        email: "",
        password: "",
        rememberUser: false,
        validity: false,
    }


    handleChange  = (field, event) => { 
        const target = event.target.value;
        this.setState({ 
            [field]: target
        })
    }
    

    checkBoxRememberMe = () => { 
        if (!this.state.rememberUser) { 
            this.setState ({ 
                rememberUser: true
            })
        } else if (this.state.rememberUser) { 
            this.setState ({ 
                rememberUser: false
            })
        }
    }

    SignIn = () => { 
        let mail = localStorage.getItem("mail")
        let pass = localStorage.getItem("password")
        let emailInput = document.getElementById("emailInput")
        let passwordInput = document.getElementById("passwordInput")
        emailInput.style.borderColor = 'red'
        passwordInput.style.borderColor = 'red'
        if (this.state.email === mail){ 
            emailInput.style.borderColor = 'green'
            if (this.state.password === pass){ 
                passwordInput.style.borderColor = 'green'
                this.setState({
                    validity : true
                })
            } 
        } 
           
    }

    // test = () => { 
    //     let emailInput = document.getElementById("emailInput")
    //     let passwordInput = document.getElementById("passwordInput")
    //     console.log(emailInput);
    //     console.log(passwordInput);
    // }


    render () { 
        return ( 
            <div className="signIn-wrapper">
                <div className="signIn-body">                   
                        <img src={Icon} alt="icon" id= "lockImg" />
                        <input type="text" placeholder='Email' id="emailInput" onChange={this.handleChange.bind(this, "email")} value={this.state.email} />
                        <input type="password" placeholder='Password' id='passwordInput' onChange={this.handleChange.bind (this, 'password')} value = {this.state.password} />
                        <div className="remind">
                        <input type="checkbox" name="spam" className="remember" onClick = {this.checkBoxRememberMe} />
                        <div className = "checkBox-text" >Remember me</div>
                        </div> 
                        {(this.state.validity) ? <button className = 'btn' type="button" onDoubleClick = {this.SignIn}><NavLink to='/success'>Sign In</NavLink></button>
                                               : <button className = 'btn' type="button" onClick = {this.SignIn}>Sign In</button>}
                        <div className = "entrancePage-nav"><span><NavLink to="reset">Forgot password?</NavLink></span><span><NavLink to='/signUp'>Don't have an account? Sign Up</NavLink></span></div>                  
                </div>
            </div>
        )   
    }
}


export default SignIn
