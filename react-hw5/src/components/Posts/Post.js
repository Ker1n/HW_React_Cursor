import React from "react";
import "./post.css";
 import active from "./img/active.png";
import massage from "./img/message.png";
import like    from "./img/like.png";
import retweet from "./img/retweet.png";
import share   from "./img/share.png";


const Post = (props) => { 
  
  return ( 
    <div className="main__post">
      <div className="post">
        <div className="post__wrapper">
            <div className="post__userAvatar">
            <img src={props.userVatar} alt="user Vatar"/>
            </div>
            <div className="post__body">
              <div className="post__info">
                <div className="info__userName">{props.userName}</div>
                <div className="info__check">
                  <img src={active} alt="active"/>
                </div>
                <div className="info__nickName">
                  {props.nickname}
                </div>
                <div className="info__date">
                  {props.date}
                </div>
              </div>
              <div className="post__text">
                {props.content}
              </div>
              <div className="post__img">
              <img src={props.contentImg} alt="content Img"/>
              </div>
              <div className="post__nav">
                <div ><img src={massage} alt="massage"/><span>{props.messageCounter}</span></div>                            
                <div ><img src={like} alt="like"/><span>{props.likeCounter}</span></div>
                <div ><img src={retweet} alt="retweet"/><span>{props.retweetCounter}</span></div>
                <div className = "nav__hover"><img src={share} alt="share"/></div>            
              </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Post