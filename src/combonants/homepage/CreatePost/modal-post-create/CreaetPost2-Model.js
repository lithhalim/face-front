import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import io from 'socket.io-client';


//icon from material ui
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Modal_Header_Section from "./modal1-header-section";
import Modal_Text_Icon from "./modal2-text-icon-section";



const socket=io(process.env.REACT_APP_API)

const CreatePostModel=({show,mydata})=>{
    let text_value=""
    const [imagePoster,setImageposter]=useState("")

    const showmodel=()=>{
        show(false)
    }


    const publish=async(e)=>{
        e.preventDefault();
        //all data will create the post
        const text=text_value
        const postId=uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        const publisherName=mydata.fullName;
        const publisherImage=mydata.image;
        const personDoPostId=mydata.regusterid;

        //emit the data to server
        socket.emit("create_postes",{text:text,postId:postId,publisherName:publisherName,publisherImage:publisherImage,personDoPostId:personDoPostId,image:imagePoster})

        //close the model
        show(false)
    }


    //get the value from chiled
    const text_value_get=(data)=>{
        text_value=data
    }

    const ImagePoster=(data)=>{
        setImageposter(data)

    }
    
    return(
        <div className="createpost-module">
            <div className="interior">
            <h1>Create Post</h1>
               <Modal_Header_Section mydata={mydata}/>
                   <Modal_Text_Icon text_value_get={text_value_get} ImagePoster={ImagePoster}/> 
                   <button  onClick={publish} className="publish-button">
                    publish
                   </button>               
                <p className="close-button" onClick={showmodel}><CloseIcon/></p>

            </div>
        </div>
    )
}


export default CreatePostModel