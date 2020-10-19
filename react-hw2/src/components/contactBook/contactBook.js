import React, {Component} from "react";
import Contact from './contact';
import {contacts} from './contactsData';
import AddContact from './addContact';
import ContactSearchBar from "./contactSearchBar";
import './contactsBook.css';



class ContactsBook extends Component { 

    
    state = {
        contacts: [...contacts],
        filter: [...contacts],
        search: '',
        firstName: "",
        lastName: "",
        phone: "+38",
        isMale : true,
        isFemale: true,
        isAnonym: true ,
    }
    


    addContact = () => {
        this.setState((prevState) => {
            return {
                contacts: [{
                    firstName: prevState.firstName,
                    lastName: prevState.lastName,
                    phone: prevState.phone,
                    gender: prevState.gender
                },...prevState.contacts],
            };
        })
        setTimeout(() => { 
          this.setState({
            firstName: "",
            lastName: "",
            phone: "+38"
          })
        },10)
      };

    changeContactData = (field, event) => { 
      const text = event?.target?.value;
          this.setState({
            [field]: text,
          })     
      };


      handleSearchChange = (event) => {       
        const searchValue = event.target.value;
        this.setState({
          search: searchValue,
          contacts: this.state.filter.filter((contact) =>
            contact?.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
            contact?.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
            contact?.phone.includes(searchValue)                                                 
          ),
        });
      };

    

    	handleCheckBoxChange = () => {
        const male = document.getElementById("_male");
        const female = document.getElementById("female");       
        const anonym = document.getElementById("anonym");
    
        this.setState(() => {
          const filterGender = this.state.filter.filter(contact =>
              ((contact.gender === '_male') && male.checked) ||
              ((contact.gender === 'female') && female.checked) ||
              ((contact.gender === "anonym") && anonym.checked))
          return {contacts: filterGender}
          });
        };


    render () { 
      
        return (
          <div className="contactsBook__wrapper">
            <div className="container">
              <div className="contactsBook_addContact">
                <AddContact 
                state =          {this.state} 
                addContact =     {this.addContact} 
                changeFistName = {this.changeContactData.bind(this, "firstName")}
                changeLastName = {this.changeContactData.bind(this, "lastName")}
                changePhone =    {this.changeContactData.bind(this, "phone")}
                changeGender =   {this.changeContactData.bind(this, "gender")}
                />
              </div>
              <div className="contactsBook__header">
                <ContactSearchBar 
                  state =                {this.state}
                  isMale =               {this.state.isMale}
                  isFemale =             {this.state.isFemale}
                  isAnonym =             {this.state.isAnonym}
                  handleSearchChange =   {this.handleSearchChange}
                  handleCheckBoxChange = {this.handleCheckBoxChange}
                />
              </div>
              <div className="contactsBook__body">
                {this.state.contacts.map((contact) => (
                  <Contact {...contact} />
                ))}
              </div>
            </div>           
          </div>
        );
    }
    
}

export default ContactsBook


