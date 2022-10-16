import React, { useState } from "react"


//import combonants section 
import CreatePost_section1 from "./CreatePost-section1"
import CreatePost_section2 from "./CreatePost-section2"

//style
import "./style/style.scss"
import CreatePostModel from "./modal-post-create/CreaetPost2-Model";


//import my information 
let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const CreatePost=()=>{
    //show or hide the model state
    const [showmodel,setshowmodel]=useState(false)
    
    //callback function to get value from chiled 
    const show=(data)=>{
        setshowmodel(data)
    }

    return(
    <div className="createpostcontainer" >
        <CreatePost_section1 show={show} mydata={mydata}/>
        <CreatePost_section2 show={show} mydata={mydata}/>   
        {showmodel===true?<CreatePostModel show={show} mydata={mydata}/>:<></>}
    </div>
    )
}


export default CreatePost