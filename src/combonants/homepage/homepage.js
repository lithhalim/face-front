import React, { useEffect, useState } from "react"
import CreatePost from "./CreatePost/CreaetPost1"
import Main_Poste from "./posts/main-postes"
import Information_bar from "./InformationBar/information-bar"
import Connection_Frind from "./connectionFrendbar/connection-frend"


//soket io section
import io from "socket.io-client"
import Movei_file from "./movei-bar/Movei_file"
const socket=io(process.env.REACT_APP_API)

let mydata
if(window.localStorage.mydata){
  mydata=JSON.parse(window.localStorage.mydata)
}

const HomePage=()=>{

    const [onlinefrind,setOnlineUser]=useState()

 
    useEffect(()=>{
              //to add online to the object isonline
              socket.emit("isonline",mydata.regusterid)
    
              //to get all users online
              socket.on("online-frend",(data)=>{
              let all_online_user= Object.keys(data)
              setOnlineUser(all_online_user)
           })      

    },[socket])


    return(
        <div className="home-page-container" >
            <CreatePost/>
            <Main_Poste/>
            <Information_bar />
            <Connection_Frind onlinefrind={onlinefrind}/>
            <Movei_file/>
        </div>
    )
}


export default HomePage