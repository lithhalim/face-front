import React from "react"
import Card_Comment_Section from "./comment-section/card3-comment-section";
import Header_card from "./header-card";
import Card_icon_post from "./all-icon-onpost/all-icon-onpost"




const Card_Post=({postdata})=>{
    return(
      <div className="post-card-container">
        <Header_card postdata={postdata}/>
      { postdata.image? <img src={postdata.image} alt="" className="main-image" />:""}
          <p  className="post-text" >{postdata.text}</p>
          <Card_icon_post postdata={postdata}/>
        <Card_Comment_Section postdata={postdata}/>
      </div>
      )
}

export default Card_Post