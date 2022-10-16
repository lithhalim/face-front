import React from "react"
import style from "../../../../style_combonants/Style-combonants";
import Moment from 'react-moment';



const Card_Comment=({postdata})=>{

    const {commentId,text,commenterName,commenterImage,createdAt}=postdata
    return(
        <>
            <div className="comment-container-card-post">
                <img src={commenterImage} alt="" />
                    <div className="text-container">
                        <p className="name">{commenterName}</p>
                        <p className="poster-comment-text">{text}</p>
                        <p className="time">
                            <Moment fromNow >{createdAt}</Moment>
                        </p>
                    </div>
                        
            </div>            
        </>
    )
}

export default Card_Comment