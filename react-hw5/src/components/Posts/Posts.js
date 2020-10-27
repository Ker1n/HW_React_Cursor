import React, {Component} from 'react';
import {postsData} from './postsData';
import Post from './Post';



class Posts extends Component { 
    
    state = {
        posts: [...postsData]
        
    }


    render () { 
        return ( 
            <>
            {this.state.posts.map((postData) => (
                <Post {...postData}  />
            ))}
            </>
        )
    }

};

export default Posts





           
          


