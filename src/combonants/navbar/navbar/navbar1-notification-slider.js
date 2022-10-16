import React from "react"
import Moment from 'react-moment';

import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router";
import { Delete_Notification } from "../../../redux/Delete-Notification";

//the card for notification section 
const NavBar1Card=({data})=>{
    const Navi=useNavigate()
    const {TypeNotification,createdAt,fullName,image,id}=data;
    const select=useSelector(state=>(state.deleteNotification.value))
    const dispatch=useDispatch()


    const check_notification=(data)=>{
        let saved_data=[]
        saved_data.push(data.currentTarget.getAttribute("typenotification"))
        saved_data.push(data.currentTarget.getAttribute("idnotification"))
        dispatch(Delete_Notification(saved_data))
        if(saved_data[0]=="frendRequest"){
            Navi("/frendrequest")
        }
        if(saved_data[0]=="accept Frend Request"){
            Navi("/myfrend")
        }
    }

    return(
        <>
            <div className="navbar1card" onClick={check_notification} typenotification={TypeNotification} idnotification={id}>
                <div className="container">
                <img src={image} alt="" />
                    <div className="text-section">
                        <p className="fullname">{fullName}</p>
                        <p className="type-notification">{TypeNotification}</p>
                        <p className="timecontainer">
                            <Moment fromNow date={createdAt} />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar1Card