import React, {Component} from "react";
import Icon from "./../padlock.svg";
import Help from './../help.png';
import {NavLink} from 'react-router-dom';

const nameRegExp = /^[a-zA-Zа-яА-Я]{3,}/i;
const passwordRegEx = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}/;
const emailRegEx =  /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{3,})+@([a-zA-Z0-9-]{2,})+\.([a-zA-Z0-9-]{2,})$/;



class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mailing: false,
        firstNameValid: false,
        lastNameValid: false,
        emailValid: false,
        passwordValid: false,
        
    }
            

    handleChange  = (field, event) => { 
        const target = event.target.value;

        this.setState({ 
            [field]: target
        })
        event.target.style.borderColor = 'green';
        if (field === 'email') { 
            let email = emailRegEx.test(target);
            if (!email) event.target.style.borderColor = 'red';           
        } 
        else if (field === 'password') {
            let pass = passwordRegEx.test(target);
            if (!pass) event.target.style.borderColor = 'red';
        }
        else if (field === 'firstName' || field === 'lastName') {
            let fullName = nameRegExp.test(target);
            if (!fullName) {event.target.style.borderColor = 'red'};              
        }   

        if(emailRegEx.test(this.state.email)) {this.setState({emailValid:true})}
        if(passwordRegEx.test(this.state.password)) {this.setState({passwordValid:true})}
        if(nameRegExp.test(this.state.firstName)) {this.setState({firstNameValid:true})}
        if(nameRegExp.test(this.state.lastName)) {this.setState({lastNameValid:true})}
           
    }


    checkMailing = () => { 
        if (!this.state.mailing) { 
            this.setState ({ 
                mailing: true
            })
        } else if (this.state.mailing) { 
            this.setState ({ 
                mailing: false
            })
        }
    }

    completionOfSignUp  = () => { 
        let {firstNameValid} = this.state;
        let {lastNameValid} = this.state;
        let {emailValid} = this.state;
        let {passwordValid} = this.state;

        if (firstNameValid) {
            if (lastNameValid) { 
                if (emailValid) { 
                    if (passwordValid) {
                        localStorage.setItem('mail', this.state.email);
                        localStorage.setItem('password', this.state.password);
                    }
                }
            }
        }
    }

    render() { 
        return ( 
            <div className="signIn-wrapper">
            <div className="signIn-body">
                    <img src={Icon} alt="icon" id= "lockImg" />
                    <h3>Sign Up</h3>
                    <input type="text" placeholder="First name"   value = {this.state.firstName} onChange = {this.handleChange.bind(this, "firstName")}/>
                    <input type="text" placeholder="Last name"    value = {this.state.lastName}  onChange = {this.handleChange.bind(this, "lastName")} />
                    <input type="text" placeholder="Email"        value = {this.state.email}     onChange = {this.handleChange.bind(this, "email")}    />
                    <div className="signIn-password" id="pass">
                    <input type="password" placeholder="Password" value = {this.state.password}  onChange = {this.handleChange.bind(this, "password")}  />  
                    <div className = "password-help" data-title="Password must have at least 8 characters, number, uppercase and lowercase letter">
                    <img src={Help} alt="help" id="help-img" /></div>
                    </div>               
                    <div className="remind">
                    <input type="checkbox" name="spam" className="spam" id='mailing' onClick = {this.checkMailing} />
                    <div className = "checkBox-text">I want to receive inspiration, marketing promotions and updates via email.</div>
                    </div>
                    <button className = "btn" type="button" onClick={this.completionOfSignUp} ><NavLink to='/Cursor-React-hw-4/' >Sign Up</NavLink></button>
                    <div className = "entrancePage-nav"><span><NavLink to="reset">Forgot password?</NavLink></span><span><NavLink to='/Cursor-React-hw-4/'>Do have an account? Sign In</NavLink></span></div>
            </div>
        </div>
        )
    }
}
    

export default SignUp
