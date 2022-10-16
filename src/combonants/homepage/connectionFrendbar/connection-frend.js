import React from "react"
import Frend_Connection_Card from "./Frend-connection-card";
import {FcAbout} from "react-icons/fc"


// {onlinefrind} -->app.js get all online frend
const Connection_Frind=({onlinefrind})=>{

    const Addactive=(e)=>{
        document.querySelector(".connection-frind").classList.toggle("active")    
    }

    
    return(
        <div className="connection-frind" >
                <div className="header" onClick={Addactive} >
                    <p style={{display:"flex",alignItems:"center"}}><FcAbout style={{fontSize:"1.2em",marginRight:"5px",
	}}/> <span> chat with my friend</span></p>
                </div>

                <div className="chat-section">
                    <Frend_Connection_Card onlinefrind={onlinefrind}/>
                </div>

            </div>
    )
}


export  default Connection_Frind