import React from "react";
import {Route, Link} from "react-router-dom";
import { ImagesBoxData } from "./ImagesBoxData";
import "./ImagesBox.css";
import FullScreenImage from "./FullScreen/FullScreenImage";



const ImagesBox = (props) => {
    const { path } = props.match;
  return (
      <div className="imagesBox-wrapper">
         <Route path={`${path}/:id`}  component={FullScreenImage} />          
          <Route
            path={`${path}/`}
            render={() => (
        <div className="grid-container">
          {ImagesBoxData.map((image) => {
            console.log(image.id)
            return (         
              <div className={image.imageName} >
              <Link to={`/photo/${image.id}`}> 
                <img src={image.urlImage} alt="img" className = "imageBox__img" />
                </Link> 
              </div>           
            );
          })}
        </div>
 )}
          />
      </div>
  );
};

export default ImagesBox;
