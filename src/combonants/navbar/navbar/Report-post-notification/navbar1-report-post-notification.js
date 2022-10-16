import React, { useState,useEffect } from "react"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import io from "socket.io-client";

import "./style/style.scss"

import {useSelector} from "react-redux"
const socket=io(process.env.REACT_APP_API)
let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Report_post_notification=({ReportNotification})=>{
    const [btnshowpostes,setbtnshowpostes]=useState(false)
    const allpost=useSelector(state=>state)

    let All_Report_Post=[]
    if(allpost.getallpostes.value!==false){
        //add soket io notification
        if(ReportNotification!==undefined){All_Report_Post.push(ReportNotification)}

        allpost.getallpostes.value.payload.data.forEach((data)=>{
            if(data.report!==0){
                All_Report_Post.push(data)
            }
        })
    }


    const showReports=()=>{
        btnshowpostes==false?setbtnshowpostes(true):setbtnshowpostes(false)
    }

    
    return(
        <div className="icon-holder-report" onClick={showReports}>
            <span>
                <BookmarkIcon className="icon icon-for-notification" style={{fontSize:"2em"}}  datatype="other"   /> 
            </span>
           {All_Report_Post.length>0?<p className="report-icon-notificatiton">{All_Report_Post.length}</p>:<></>}
           {All_Report_Post.length>0&&btnshowpostes==true?
           All_Report_Post.map(({publisherImage,report,postId,publisherName},i)=>(
            <div className="card-report" key={i}>
                <div className="element-report">
                    <img src={publisherImage} alt="" />
                    <div className="text-report">
                        <p className="name-s">{publisherName}</p>
                        <p className="report">You Have Report On Post   {report}</p>
                    </div>
                </div>
            </div>
           ))
           :<></>}
        </div>
    )
}


export default Report_post_notification