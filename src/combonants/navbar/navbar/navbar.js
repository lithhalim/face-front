import React, { useEffect, useState } from "react";
import Navbar1 from "./navbar1-notification-icon";
import Navbar2 from "./navbar2-middel-icon";
import {motion} from "framer-motion";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import logo1 from "../../assest/logo.png"
import MassageRing from "../../assest/massage-ringTone.mp4"


import "../style/navbar.scss"
//soket io section
import io from "socket.io-client"
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ShowBar_Create_Context } from "../../context-api/show-information-bar";
import { Chate_Create_Context } from "../../context-api/chate-notification";
import axios from "axios";
const socket=io(process.env.REACT_APP_API)

let mydata
if(window.localStorage.mydata){
  mydata=JSON.parse(window.localStorage.mydata)
}



const Navbar=()=>{
    const[notification,setnotification]=useState();
    const[ReportNotification,setReportNotification]=useState();
    const [showSide,setshowSide]=useState(false);
    const Navi=useNavigate();
    const  showSideBar=useContext(ShowBar_Create_Context);
    let audio = new Audio(MassageRing);


    const [newMassageCome,setnewMassageCome]=useState(false)

    //all massage notification section 
    const chateContext=useContext(Chate_Create_Context);
    const [massage,setmassage]=useState([])

    //At first time connection with database make room to clinet to join in it
    useEffect(()=>{
    //at The First Connection Will Joint To These Room -->Eveery One With His Id 
    socket.emit("JoinToRoom",mydata.regusterid)
    },[socket])

    //report notification section 
       useEffect(()=>{
              socket.on("send-the-report-to-person-do-post",(data)=>{
                setReportNotification(data)
              })
      },[socket])
  

    useEffect(()=>{
    //get the notification foor frind
    socket.on("notification",(data)=>{
      let datamy= data.filter((a)=>a.PersonAcceptFrendRequest==mydata.regusterid)
      setnotification(datamy)
    })  
    },[socket])


    const gotohome=()=>{
      Navi("/home")
    }


    const showInformationBar=()=>{
      showSideBar.setshowBar(showSide==false?true:false)
      showSide==false?setshowSide(true):setshowSide(false)
    }












    //------------------------------------massage notification section ---------------------------------//



  useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API}GetAllMassage/${mydata.regusterid}`).then((data)=>{
        setmassage(data.data.filter((a)=>(a.showmassage=="false")))
      })
  },[])




  useEffect(()=>{

      //hoin same room with the sender
      socket.emit("private-massage-room",{regusterid:mydata.regusterid})
      
      //get the new massage from frend
      socket.on("accept-privet-massage",(data)=>{
        setnewMassageCome(data)
      })
  },[socket])



  //if the user open chate change all shown to true
  useEffect(()=>{
    //change 
    if(chateContext.ChateOpenId!==false){
      let dataFilter=massage.filter((data)=>(data.chatId!==chateContext.ChateOpenId))
      //set the data to shhown here
      setmassage(dataFilter)
      //send request to change status chate to shown 
      axios.get(`${process.env.REACT_APP_API}changeStausChate/${chateContext.ChateOpenId}`)
    }
  },[chateContext.ChateOpenId])

  useEffect(()=>{
    if(chateContext.ChateOpenId==false){
      setmassage((prev=>[...prev,newMassageCome]))
    }
  },[newMassageCome])




    return(
        <div className="navbarcontainer">
                <div className="logo">
                  <span className="navbar-section-bar-item" onClick={showInformationBar}> 
                    <DensitySmallIcon style={{fontSize:"2.3em" ,marginRight:"10px"}}/>
                  </span>
                  <span onClick={gotohome}>
                    <motion.img src={logo1} alt=""   initial={{scale:1}} animate={{scale:1.05}} transition={{duration:1,yoyo:Infinity}} />
                  </span>
                </div>
                <Navbar2 informationbar={false}/>
                <Navbar1 notification={notification}  ReportNotification={ReportNotification}  massageNotification={massage}/>
       </div>
    )
}

export default Navbar