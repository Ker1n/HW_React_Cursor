import React from 'react';
import './App.css';
import Posts from "./Posts/Posts";
import {postsData} from "./Posts/postsData";

           
          


  

console.log(postsData)

function App() {

  let postsList = postsData.map((postData) => { 
    return <Posts {...postData} />
  })

  return (
    <div classNam="App">
      {postsList}
    </div>
  );
}

export default App;
