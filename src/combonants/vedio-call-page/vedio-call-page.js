import React, { useEffect, useRef, useState } from "react"

import { Peer } from "peerjs";


import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import CallEndIcon from '@mui/icons-material/CallEnd';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import "./style/style.scss"
import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)



//caller information 
let caller
if(  window.localStorage.CallerInformation){
    caller=JSON.parse( window.localStorage.CallerInformation)
}
let accepter
if(window.localStorage.AccepterInformation){
    accepter=JSON.parse(window.localStorage.AccepterInformation)
}

const VedioCallPage=()=>{
    //get the peer id to mack the connection section 
    const [peerId, setPeerId] = useState('');

    //to select the item wil add camera and aoudi to it
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);



    const [mutedVoise,setMutedVois]=useState(true);
    const [mutevedio,setmutevedio]=useState(true);



    const audioMuted=()=>{mutedVoise===true?setMutedVois(false):setMutedVois(true)};
    const vedioMuted=()=>{mutevedio===true?setmutevedio(false):setmutevedio(true)};
    




    useEffect(() => {
      const timer = setTimeout(() => {
        mutevedio===true?setmutevedio(false):setmutevedio(true)
      }, 6000);
      return () => clearTimeout(timer);
    }, []);
    




    //-----------------------------soket io connect to the room --------------------------------------//
    //get  my peer id section 
        useEffect(() => {
            const peer = new Peer();
            peer.on('open', (id) => {
            setPeerId(id)
        });


        //when you have acall mack thise step 
        peer.on('call', async(call) => {
          await navigator.getUserMedia({ video: true,audio:false }, async(mediaStream) => {

            currentUserVideoRef.current.srcObject = mediaStream;
            currentUserVideoRef.current.play();
            call.answer(mediaStream)
            call.on('stream', function(remoteStream) {
              remoteVideoRef.current.srcObject = remoteStream
              remoteVideoRef.current.play();
            });
          });
        })
        peerInstance.current = peer;
      }, [])






      //-------------------------------------secket io section ----------------------------------------//
      useEffect(()=>{
        if(caller!==undefined){socket.emit("join-chat-room",caller)}
        if(accepter!==undefined){socket.emit("join-chat-room",accepter)}  
      },[socket])

      if(accepter!==undefined){
        accepter.peerid=peerId;
          socket.emit("peerid-accepter",accepter)
      }


      useEffect(()=>{
        socket.on("get-peerid-accepter",async(data)=>{
            await navigator.getUserMedia({ video: true,audio:false }, async(mediaStream) => {
                currentUserVideoRef.current.srcObject = mediaStream;
                currentUserVideoRef.current.play();
      
                const call = peerInstance.current.call(data.peerid, mediaStream)
          
                call.on('stream', (remoteStream) => {
                  remoteVideoRef.current.srcObject = remoteStream
                  remoteVideoRef.current.play();
                });
              });
            }) 
      },[socket])


      //----------------------------------vedio audio class btn---------------------------------------//

      const leaveCall = () => {
        peerInstance.current.destroy()
        window.location.href="/home"
      }


    return(
        <>
        <div className="container-vediocall-all">
            <div className="vedioContainer-section">
                <div className="vedio-one-section">
                    <video ref={currentUserVideoRef}  style={{width:"100%",height:"100%"}}/>
                </div>
                <div className="vedio-two-section">
                    <video ref={remoteVideoRef}   style={{width:"100%",height:"100%"}}/>
                </div>
            </div>
                <ul className="vedio-call-button">
                    <li onClick={audioMuted} >
                      {mutedVoise===true?                      
                        <VolumeOffIcon sx={{cursor:"pointer" ,color:"red" ,fontSize:"1em"}}  />:<VolumeDownIcon sx={{cursor:"pointer" ,color:"blue" ,fontSize:"1em"}} />}
                    </li>
                        <li onClick={vedioMuted}>
                          {mutevedio===true?
                            <VideocamOffIcon sx={{cursor:"pointer" ,color:"black",fontSize:"1em"}} />:<VideoCameraBackIcon  sx={{cursor:"pointer" ,color:"red",fontSize:"1em"}}/>}
                        </li>
                    <li>
                        <CallEndIcon sx={{cursor:"pointer" ,color:"red",fontSize:"1em"}} onClick={leaveCall}/>
                    </li>
                </ul>
        </div>
        </>
    )
}

export default VedioCallPage