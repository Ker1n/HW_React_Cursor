import React, {Component} from "react";
import Contact from './contact';
import {contacts} from './contactsData';
import AddContact from './addContact';
import './contactsBook.css';



class ContactsBook extends Component { 

    
    state = {
        contacts: [...contacts],
        filter: [...contacts],
        search: '',
        firstName: "",
        lastName: "",
        phone: "+38",
        gender: "",
        genderMale: "1male",
        genderFemale: "female",
        genderLess: "anonym",
    }
    


    addContact = () => {
        this.setState((prevState) => {
            return {
                contacts: [{
                    firstName: prevState.firstName,
                    lastName: prevState.lastName,
                    phone: prevState.phone,
                    gender: prevState.gender
                },...prevState.contacts]
            };
        })
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

  
      handleCheckBoxHandle = (field, event) => { 
        const searchCheckBoxValue = event.target.value;
        this.setState({ 
            [field]: searchCheckBoxValue,
            contacts: this.state.filter.filter((contact) =>
            contact?.gender.includes(searchCheckBoxValue)                                             
            ),
        })
      }


    render () { 
      
        return (
          <div className="contactsBook__wrapper">
          <button onClick={this.test}>RESET</button>
            <div className="container">
              <div className="contactsBook_addContact">
                <AddContact 
                state =          {this.state} 
                addContact =     {this.addContact} 
                // ref =            {this.inputsAddContact}   
                changeFistName = {this.changeContactData.bind(this, "firstName")}
                changeLastName = {this.changeContactData.bind(this, "lastName")}
                changePhone =    {this.changeContactData.bind(this, "phone")}
                changeGender =   {this.changeContactData.bind(this, "gender")}
                />
              </div>
              <div className="contactsBook__header">
                <div className="header__row">
                  <div className="header__input">
                    <input
                      name="search"
                      value={this.state.search}
                      type="text"
                      placeholder="Search"
                      onChange={this.handleSearchChange}
                    />                 
                  </div>
                  <div className="header__checkbox">
                    <label htmlFor="genderMale">
                    Male 
                    <input
                      type="checkbox"                     
                      id="genderMale"
                      name="genderMale"
                      onChange={this.handleCheckBoxHandle.bind(this, "genderMale")}
                      defaultChecked
                    />      
                    </label>
                    <label htmlFor="genderFemale">
                      |  Female
                      <input
                        type="checkbox"                     
                        id="genderFemale"
                        name="genderFemale"
                        onChange={this.handleCheckBoxHandle.bind(this, "genderFemale")}
                        defaultChecked
                      />
                    </label>
                    <label htmlFor="genderRobot">
                      |  Anonym
                      <input
                        type="checkbox"                       
                        id="genderRobot"
                        name="genderRobot"
                        onChange={this.handleCheckBoxHandle.bind(this, "genderMale")}
                        defaultChecked
                      />
                    </label>
                  </div>
                </div>
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


