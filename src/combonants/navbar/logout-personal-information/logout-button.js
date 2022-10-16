import React, { useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router";

import axios from "axios"


let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Logout_button=()=>{
    const Navi=useNavigate()
    const logout=async()=>{
        const deleteRefreshToken=await axios.post(`${process.env.REACT_APP_API}signout`,mydata)
        Navi('/')
        localStorage.removeItem("mydata");
    }
    return(
        <li onClick={logout}>
            <p>sign out</p>
            <span>  <LogoutIcon/></span>
        </li>
    )
}


export default Logout_button