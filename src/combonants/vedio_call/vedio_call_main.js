

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import audioTone from "../assest/ringtone.mp4"



//soket io section
import io from "socket.io-client"
import Vedio_Call_Notification from "./vedio-call-section/navbar4-vedio-call-notification"
const socket=io(process.env.REACT_APP_API)

let mydata
if(window.localStorage.mydata){
  mydata=JSON.parse(window.localStorage.mydata)
}


const Vedio_call_main=()=>{
        const Navi=useNavigate();
        let audio = new Audio(audioTone);


        //-------------------------------------vedio call notification --------------------------------------//
        const[notification_vedio_call,setnotification_vedio_call]=useState(false)//get notification from another clinet
        const[notification_close,set_notification_close]=useState(true)//open and close notification card

    
  
        //every user connect to room like his reguster id
        useEffect(()=>{
           socket.emit("vedio-call-personid-room",{regusterid:mydata.regusterid})
        },[socket])
    
        
        useEffect(()=>{
            //get notification you have avedio call
            const vedio_call=socket.on("get-vedioCall-request",(request_vedio_vall)=>{
            setnotification_vedio_call(request_vedio_vall)
            set_notification_close(true)//open the notification card

            //play audio
            audio.play();

            })
    
        },[socket])



        //-------------------check if the clinet accept or reject vedio call----------------------------//
        //after the accepter press accept or reject
          const get_status=(data)=>{
            //close the notification 
            set_notification_close(false)
            //close audio
            //save the information of answer in local storage
            window.localStorage.AccepterInformation=JSON.stringify(data)
            window.localStorage.removeItem("CallerInformation")
            //if press accept go to page vedio call 
            if(data.type=="Accept"){
              Navi('/vediocallpage')  
            }
            audio.muted();


          }
    



    return(
        <>
            <Vedio_Call_Notification 
                    notification_vedio_call={notification_vedio_call} 
                    get_status={get_status} 
                    notification_close={notification_close}
                    />
        </>
    )
}


export default Vedio_call_main