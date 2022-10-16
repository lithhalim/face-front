import React, { useEffect, useRef,useState } from "react"
import Card_Comment from "../comment-section/card3-comment2-section"
import SendIcon from '@mui/icons-material/Send';
import io from "socket.io-client";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import "./style/style.scss"

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}




const { v4: uuidv4 } = require('uuid');
const socket=io(process.env.REACT_APP_API)



const Card_Comment_Section=({postdata})=>{


    const [showcomme,setshowcomment]=useState(false)
    const comment_data=useRef()

    //Add Comment On The Post 
    const comment=()=>{
        const commentId=uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        const text=(comment_data.current.value);
        const commentOnPostId=(comment_data.current.getAttribute("postid"));
        const commenterName=mydata.fullName;
        const commenterImage=mydata.image;
        socket.emit("create_comment",{commentId:commentId,text:text,commentOnPostId:commentOnPostId,commenterName:commenterName,commenterName:commenterName,commenterImage:commenterImage})
        comment_data.current.value=""
    }

    //Show All Comment On The Post
    const showcomment=()=>{
        showcomme==true?setshowcomment(false):setshowcomment(true)
    }

    
    return(
        <>
            <div className="comment-container"   >
                <img src={mydata.image} alt=""/>
                <input type="text" postid={postdata.postId} ref={comment_data}/>
                <span onClick={comment} className="comment-style">
                    <SendIcon style={{fontSize:"2em",marginTop:"2px"}} />
                </span>
            </div>

            {showcomme==true&&postdata.commentOnPostes&&postdata.commentOnPostes.length>0? postdata.commentOnPostes.map((postdata,i)=>(
                <Card_Comment postdata={postdata} key={i} />
            ))   
            :<></>
            }
            <div className="morecomment" onClick={showcomment} >
                {showcomme==true?<p style={{color:"red"}}>Hide <span><VisibilityOffIcon/> </span> </p>:<p>Show <span> <VisibilityIcon/></span> </p>
            }</div>

        </>
    )
}

export default Card_Comment_Section