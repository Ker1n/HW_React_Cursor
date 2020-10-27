import React from 'react';
import { contacts } from  "../contactsData";
import User from '../img/user.png';
import './ContactInfo.css';




const ContactInfo = (props) => { 
    const ContactItem = contacts.find((contact) =>  contact.id === Number(props.match.params.id))
        return ( 
        <div className="contactInfo-wrapper" onClick = {(e) => {
            if(Array.from(e.target.classList).includes("contactInfo-wrapper")) { 
                props.history.goBack ()
                }         
            }}>
            <div className="contactInfo__container">
                <div className="contactInfo__body">
                    <div>
                        <img src={User} alt="user" className="contactInfo__avatar"/>
                    </div>
                    <div className="contactInfo__row">
                        <div className="contactInfo__title"><h2>User Card</h2></div>
                        <div className="contactInfo__firstName"><span>Name: </span>{ContactItem.firstName}</div>
                        <div className="contactInfo__lastName"><span>Last Name: </span>{ContactItem.lastName}</div>
                        <div className="contactInfo__phone"><span>Phone: </span>{ContactItem.phone}</div>
                        <div className="contactInfo__gender"><span>Gender: </span>{(ContactItem.gender === "_male") ?  "male" : ContactItem.gender}</div>
                    </div>
                </div>
                <div className="containerInfo__addInfo">
                    <div className="addInfo__title">Additional Information</div>
                    <div className="addInfo__email"><span>Email:</span>**********@gmail.com</div>
                    <div className="addInfo_bDay"><span>Birth Day:</span>**/**/****</div>
                    <div className="addInfo__notification"><span>Notes:</span>Write notifications about this user </div>
                </div>
            </div>
        </div>
    )
};



export default ContactInfo 

