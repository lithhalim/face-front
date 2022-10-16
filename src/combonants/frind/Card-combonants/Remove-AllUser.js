import React,{useState} from "react";
import axios from 'axios';
import Button from '@mui/material/Button';


const RemoveFrendFromAllFrend=({data,mydata,alldata})=>{
    const state=data.main

    const remove=(e)=>{
        //add new status on the all frind table
        let PersonAcceptFrendRequest= e.currentTarget.getAttribute("datatype")
        axios.post(`${process.env.REACT_APP_API}allfrend`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json' },
            data:{allfrindid:mydata.regusterid,idfreand:PersonAcceptFrendRequest}
        })
        //if the front press add change status to remove from page
        alldata({allfrindid:state.regusterid,fullName:state.fullName,image:state.image,status:"remove"})

    }

return(
    <>
        <Button size="small" onClick={remove} datatype={state.regusterid}>Remove</Button> 
    </>
)
}

export default RemoveFrendFromAllFrend