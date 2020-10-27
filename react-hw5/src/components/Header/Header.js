import React from  'react'; 
import {NavLink} from 'react-router-dom';
import {MENU} from './../../App';
import './Header.css';


const Header = () => { 
    return (
         <>
         <nav className= "headerWrapper"> 
            {MENU.map ((menuItem) => { 
                return <NavLink to={menuItem.path} exact = {menuItem.exact} className="headerItem">
                        {menuItem.title}
                        </NavLink>
            })}
         </nav>
        </>
    )
};



export default Header