import React, { useEffect, useState } from "react";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import io from "socket.io-client"
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Vediocall_Create_Context } from "../../../context-api/vedio-call";


//constructure use to connect the two clinet together
const socket=io(process.env.REACT_APP_API)
 
let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


//massanger get massnger.myfrindid from-------> Massege1-container-chate
const Vedio_Call=({massanger})=>{
    const Navi=useNavigate();
    const VediocallContext=useContext(Vediocall_Create_Context)

    const vedioCall=()=>{
        //save the chate id in local storage to can use 
        window.localStorage.CallerInformation=JSON.stringify(massanger)
        window.localStorage.removeItem("AccepterInformation")
        

        //send the request for vedio call for the another user 
        socket.emit("Vedio-Call-Request",{accept_Request_Id:massanger.myfrindid,Send_Request_Id:mydata.regusterid,image:mydata.image,fullName:mydata.fullName,chatId:massanger.chatId})


        //and go to vedio call page
        Navi("/vediocallpage")
    }

    return(
        <>
            <VideoCallIcon onClick={vedioCall}/> 
        </>
    )
}

export default Vedio_Call