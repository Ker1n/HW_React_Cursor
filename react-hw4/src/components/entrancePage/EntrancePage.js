import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import './EntrancePage.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import UndefinedPage from '../Page404/undefinedPage'
import SuccessPage from './../SuccessPage/SuccessPage'



const EntrancePage = () => { 


    return ( 
        <div className="EntrancePage"> 
        <BrowserRouter> 
        <Switch>
            <Route path = "/"  exact  render = {() => <SignIn /> } />
            <Route path = "/signUp" exact  render = {() => <SignUp /> } />
            <Route path = "/success" exact  render = {() => <SuccessPage /> } />
            <Route   component= {() => <UndefinedPage />} />
        </Switch>   
        </BrowserRouter>  
        </div>
    )
}


export default EntrancePage
