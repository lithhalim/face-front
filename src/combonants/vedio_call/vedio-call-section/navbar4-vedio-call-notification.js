import React, { useEffect, useState } from "react";


import "../style/vediocall.scss"
import style from "../../style_combonants/Style-combonants"
import Button from '@mui/material/Button';



const Vedio_Call_Notification=({notification_vedio_call,get_status,notification_close})=>{

    const status_of_calling=(data)=>{
      //the caller answer accept or reject
        let status=(data.currentTarget.textContent);

        //if accept save send the answer
        notification_vedio_call.type=status;
        get_status(notification_vedio_call);
      }


    return(
        <>
            {notification_vedio_call!==false&&notification_close?<div className="vedio-call-notification"  >
              <ul className="vedio-call-element">
                <li>You Have Video Call From </li>
                <li>
                  <p className="name">{notification_vedio_call.fullName}</p>
                  <img src={notification_vedio_call.image} alt="" style={style.image_profole} />
                </li>
                <li>
                  <Button variant="outlined" color="error" onClick={status_of_calling}>Reject</Button>
                  <Button variant="contained" color="success" onClick={status_of_calling}>Accept</Button>
                </li>
              </ul>
            </div>:<></>}
        </>
    )
}

export default Vedio_Call_Notification