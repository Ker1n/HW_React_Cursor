import React, { Component } from "react";
import Contact from "./Contact";
import dataContacts from "./contactData"
import "./contacts.css"



class Contacts extends Component {
    state = {
      contacts: [...dataContacts],     
      search: "",
      filter: [...dataContacts],
    //   showMale: true,
    //   showFemale: true,
    //   showAnonymous: true,
    };

    handleSearchChange = (e) => {
      const searchValue = e.target.value;
      this.setState({
        search: searchValue,
        filter: this.state.contacts.filter((contact) =>
          contact?.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                                                                                          ||
          contact?.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                                                                                          ||
          contact?.phone.includes(searchValue)                                                
        ),
      });
    };

    render() {
      return (
        <div className = "Contacts-book">
          <div className="search">
            <label> {""}              
              <input className="input" type="text" value={this.state.search} placeholder="Search" onChange={this.handleSearchChange} />              
            </label>
          </div>
          <div>
            {this.state.filter.map((contact) => (
              <Contact contact={contact} />
            ))}
          </div>
        </div>
      );
    }
  }





export default Contacts 