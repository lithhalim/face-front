import React,{useState} from "react";
import axios from 'axios';
import Button from '@mui/material/Button';

import io from "socket.io-client"
const socket=io(`${process.env.REACT_APP_API}`)


const AddFrinfFromAllFrind=({data,mydata,alldata})=>{

    const state=data.main

    const  addfrind=(e)=>{
        //person will accept the request
        let PersonAcceptFrendRequest= e.currentTarget.getAttribute("datatype");

        //emit the request to be frend of me
        axios.post(`${process.env.REACT_APP_API}allfrend`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
            data:{allfrindid:mydata.regusterid,idfreand:PersonAcceptFrendRequest}
        })
        //if the front press add change status to remove from page
        axios.post(`${process.env.REACT_APP_API}frendrequest`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
            data:{PersonAcceptFrendRequest:PersonAcceptFrendRequest,fullName:mydata.fullName,image:mydata.image,PersonSendFrendRequest:mydata.regusterid}
        })
        //send the notification 
        socket.emit("Send Frend Request To Accepter",{PersonSendFrendRequest:mydata.regusterid,PersonAcceptFrendRequest:PersonAcceptFrendRequest,TypeNotification:"frendRequest",fullName:mydata.fullName,image:mydata.image})
        //change statuse of the element 
        alldata({allfrindid:state.regusterid,fullName:state.fullName,image:state.image,status:"remove"})
    }


return(
    <>
    <Button size="small" onClick={addfrind}datatype={state.regusterid} >Add Friend</Button>
    </>
)
}

export default AddFrinfFromAllFrind