import axios from "axios";
import React, { useEffect } from "react"
import { useState } from "react";
import { useContext } from "react";
import { RegusterId_Create_Context } from "../context-api/personal-page";
import Information_bar from "../homepage/InformationBar/information-bar";
import Movei_file from "../homepage/movei-bar/Movei_file";
import Card_Post from "../homepage/posts/card/card";
import HerderPersonal_page_information from "./personal-page/header-personal-page";


import "./style/personalpage.scss"


let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}

const Personal_page_information=()=>{

    const MainPageContext=useContext(RegusterId_Create_Context)
    const [DataUse,setDataUse]=useState(false)


    useEffect(()=>{
         axios.get(`${process.env.REACT_APP_API}user/${MainPageContext.RegusterId}`).then((data)=>{
            setDataUse(data.data[0])
         })
    },[])


    return(
        <ul className="main-page-holder">
            <Information_bar/>
            <li className="container-information">
                {DataUse!==false?<HerderPersonal_page_information personal_data={DataUse}/>:<></>}
            </li>
            <li className="container-postet">
                {DataUse!==false?DataUse.posts.map((data,i)=>(
                    <Card_Post postdata={data} key={i}/>
                )):<></>}
            </li>
            <Movei_file/>
        </ul>
    )
}


export default Personal_page_information