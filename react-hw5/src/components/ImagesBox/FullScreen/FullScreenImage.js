import React from 'react';
import { ImagesBoxData } from  "../ImagesBoxData";
import './FullScreenImage.css';




const FullScreenImage = (props) => { 
    const imageItem = ImagesBoxData.find((image) =>  image.id === Number(props.match.params.id))
    return ( 
        <div className="FullScreenImage-wrapper" onClick = {(e) => {   
            if(Array.from(e.target.classList).includes("FullScreenImage-wrapper")) { 
                props.history.goBack ()
                }         
            }}>
            <img src={imageItem.urlImage} alt="#" className="fullscreen-Image" />
        </div>
    )
};



export default FullScreenImage 