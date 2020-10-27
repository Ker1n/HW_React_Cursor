import React from 'react';
import { Route, BrowserRouter, Redirect} from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ImagesBox from './components/ImagesBox/ImagesBox'
import ContactBook from './components/contactBook/contactBook'
import Posts from './components/Posts/Posts';


export const MENU = [{
  title: 'Home',
  path: '/home',
  component: HomePage,
  exact: true
},{
  title: 'Posts',
  path: '/posts',
  component: Posts,
  exact: true
},{ 
  title: 'Photos',
  path: '/photo',
  component: ImagesBox,
  exact: false
},{
  title: 'Contacts',
  path: '/contacts',
  component: ContactBook,
  exact: false
}]


function App() {
  return (
    <BrowserRouter>
            <Header />
      <div>
        {MENU.map(({path, component, exact = false}) => ( 
          <Route path={path} exact={exact} component={component} />
        ))}
      </div>
      <Route path = "/" exact render={() => <Redirect to="/home" />} />
    </BrowserRouter> 
  );
}

export default App;


// {MENU.map((menuItem) => { 
//   return <NavLink to = {menuItem.path} className="menuItem">{menuItem.title}</NavLink>
// })}
