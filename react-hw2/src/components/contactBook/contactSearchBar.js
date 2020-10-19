import React from "react";

const ContactSearchBar = (props) => {
  return (
      <div className="header__row">
        <div className="header__input">
          <input
            name="search"
            value={props.search}
            type="text"
            placeholder="Search"
            onChange={props.handleSearchChange}
          />
        </div>
        <div className="header__checkbox">
          <label htmlFor="genderMale">
            Male
            <input
              type="checkbox"
              id="_male"
              name="_male"
              value={props.isMale}
              onChange={props.handleCheckBoxChange}
              defaultChecked
            />
          </label>
          <label htmlFor="genderFemale">
            | Female
            <input
              type="checkbox"
              id="female"
              name="female"
              value={props.isFemale}
              onChange={props.handleCheckBoxChange}
              defaultChecked
            />
          </label>
          <label htmlFor="genderRobot">
            | Anonym
            <input
              type="checkbox"
              id="anonym"
              name="anonym"
              value={props.isAnonym}
              onChange={props.handleCheckBoxChange}
              defaultChecked
            />
          </label>
        </div>
      </div>

  );
};


export default ContactSearchBar