import React,{useState} from "react";
import axios from 'axios';
import Button from '@mui/material/Button';


const RemoveFrindRequest=({data,mydata,alldata})=>{
    const state=data.main

    const removefrendfromrequest=(e)=>{
        let PersonSendFrendRequest= e.currentTarget.getAttribute("datatype")
        axios.delete(`${process.env.REACT_APP_API}allfrend`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
            data:{allfrindid:mydata.regusterid,idfreand:PersonSendFrendRequest}
        })
        axios.delete(`${process.env.REACT_APP_API}frendrequest`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
            data:{PersonAcceptFrendRequest:mydata.regusterid,PersonSendFrendRequest:PersonSendFrendRequest}
        })
        // use to remove the element from the page
        alldata({status:"remove"})
    }
return(
    <>
         <Button size="small" onClick={removefrendfromrequest} datatype={state.PersonSendFrendRequest}  >Remove request</Button>
    </>
)
}

export default RemoveFrindRequest