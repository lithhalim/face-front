import React from "react"

import Delete_Post_Part from "./Report-Rate-Delete-Card.js/Delete-post";
import Report_On_Post from "./Report-Rate-Delete-Card.js/Report-on-post";
import Rate_Post_Section from "./Report-Rate-Delete-Card.js/Rate-post-part";

import "./style/style.scss"

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Person_Nav_Card=({postdata,doReport})=>{
    

    return(
        <div className="card1-person-information-bar">
            <ul className="post-bar">
                <li className="icon-container">
                    <Report_On_Post postdata={postdata} doReport={doReport}/>
                </li>
                <li className="icon-container">
                    <Delete_Post_Part mydata={mydata} postdata={postdata} doReport={doReport}/>
                </li>
                <li className="icon-container">
                    <Rate_Post_Section mydata={mydata} doReport={doReport} postdata={postdata}/>
                </li>
            </ul>
        </div>
    )
}


export default Person_Nav_Card