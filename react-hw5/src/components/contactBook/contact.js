import React from 'react';
import userIMg from "./img/user.png";
import male from './img/male.png';
import female from './img/female.png';
import robot from './img/robo.png';
import {Link} from 'react-router-dom';

const renderingGenderIcon = (gender) => {
    if (gender === "_male") {
      return male;
    } else if (gender === "female") {
      return female;
    } else {
      return robot;
    }
  }



const Contact = (props) => { 

    return (
      <>
        <Link to={`/contacts/${props.id}`}>
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
        </Link>
      </>
    )
};


export default Contact;