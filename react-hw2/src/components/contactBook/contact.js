import React from 'react';
import userIMg from "./user.png";
import male from './male.png';
import female from './female.png';
import robot from './robo.png';


const renderingGenderIcon = (gender) => {
    if (gender === "1male") {
      return male;
    } else if (gender === "female") {
      return female;
    } else {
      return robot;
    }
  }



const Contact = (props) => { 
  
    return (
        <div className="contact__wrapper">
            <div className="contact__body">
                <div className="contact__avatar">
                <img src={userIMg} alt="userAvatar"/></div>
                <div className="contact__fullName">
                 {props.firstName} <span>{props.lastName}</span>           
                </div>
                <div className="contact__number">{props.phone}</div>
                <div className="contact__gender">
                <img src={renderingGenderIcon(props.gender)} />
                </div>
            </div>
        </div>
    )
};


export default Contact;