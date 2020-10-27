import React from "react";


const AddContact = (props) => { 

  

    return ( 
        <div className="addContact__row">
        <div className="row__left">
          <div className="addContact__item">
            <div className="item__title">First name</div>
            <input type="text" value={props.state.firstName} onChange={props.changeFistName}  />
          </div>
          <div className="addContact__item">
            <div className="item__title" >Last name</div>
            <input type="text" value={props.state.lastName} onChange={props.changeLastName}  />
          </div>
        </div>
        <div className="row__right">
          <div className="addContact__item">
            <div className="item__title">Number</div>
            <input type="text"  value={props.state.phone} onChange={props.changePhone}  />
          </div>
          <div className="addContact__item">
            <div className="item__title">Gender</div>
            <select value={props.state.gender} onChange={props.changeGender} >
              <option value="none" hidden="select">select</option>
              <option value= "_male">Male</option>
              <option value= "female">Female</option>
            </select>
            <div className="addContact__btn">
              <button onClick={props.addContact}>Add Contact</button>
            </div>
          </div>
        </div>
      </div>
    )
};

export default AddContact