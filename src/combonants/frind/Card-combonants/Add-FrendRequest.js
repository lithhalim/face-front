import React,{useState} from "react";
import axios from 'axios';
import Button from '@mui/material/Button';

import { v4 as uuidv4 } from 'uuid';


import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)


const AcceptFrendRequst=({data,mydata,alldata})=>{
    const chatId=uuidv4(); 
    const state=data.main

    const acceptfrendrqeuest=(e)=>{
        let PersonSendFrendRequest= e.currentTarget.getAttribute("datatype")
        let images= e.currentTarget.getAttribute("images")
        let fullnames= e.currentTarget.getAttribute("fullnames")

//-------------------------------- Save In MyFrinf For Two Element--------------------------------------//
        //sent add frind to the sender user
        axios.post(`${process.env.REACT_APP_API}frind`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
            data:{myfrindid:PersonSendFrendRequest,fullName:fullnames,image:images,frindid:mydata.regusterid,chatId:chatId }
        })

        //sent add frind to the accepter user
        axios.post(`${process.env.REACT_APP_API}frend2`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
            data:{myfrindid:mydata.regusterid,frindid:PersonSendFrendRequest,fullName:mydata.fullName,image:mydata.image,chatId:chatId}
        })

        axios.delete(`${process.env.REACT_APP_API}frendrequest`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
            data:{PersonAcceptFrendRequest:mydata.regusterid,PersonSendFrendRequest:PersonSendFrendRequest}
        })

        
        //emit the request to be frend of me
        axios.post(`${process.env.REACT_APP_API}allfrend`,{
                    headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
                    data:{allfrindid:mydata.regusterid,idfreand:PersonSendFrendRequest}
        })

        //send the notification 
        socket.emit("Send Frend Request To Accepter",{PersonSendFrendRequest:mydata.regusterid,PersonAcceptFrendRequest:PersonSendFrendRequest,TypeNotification:"accept Frend Request",fullName:mydata.fullName,image:mydata.image})


        alldata({status:"remove"})

    }



return(
<>
    <Button size="small" onClick={acceptfrendrqeuest}datatype={state.PersonSendFrendRequest} images={state.image} fullnames={state.fullName}>Accept friend</Button>    
</>
)
}

export default AcceptFrendRequst