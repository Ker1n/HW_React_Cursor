import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="contact-wrapper">
      <div className="contact">    
        <span className="fullName">{contact.firstName} {contact.lastName}</span> 
         
        <span className="number">{contact.phone}</span>           
      </div>  
      <span className="gender">  {contact.gender}</span> 
    </div>
  );
};
export default Contact;
