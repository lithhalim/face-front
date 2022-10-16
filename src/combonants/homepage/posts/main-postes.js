import React, { useEffect, useState } from "react"
import Card_Post from "./card/card"
import "../style/homepage.scss"

//soket io section
import io from "socket.io-client"
import { useDispatch, useSelector } from "react-redux"
import { GetAllPostes } from "../../../redux/get-all-postes"
const socket=io(process.env.REACT_APP_API)



const Main_Poste=()=>{
    const [newpostes,setnewpostes]=useState([]);
    //show new postes area created

    const dispatch=useDispatch()
    const getAllPostes=useSelector(state=>state.getallpostes.value)
    useEffect(()=>{
        socket.on("display_postes",(data)=>{
            //to add the new post to array 
            setnewpostes((olddata)=>([...olddata,data]))
        })    
    },[socket])

    useEffect(()=>{
        dispatch(GetAllPostes())
    },[dispatch])


    return(
        <div className="card-conrainer">
            { newpostes!==undefined? newpostes.map((postdata,i)=>(<Card_Post postdata={postdata} key={i}/>)) :<></>}
            { getAllPostes!==false? getAllPostes.payload.data.map((postdata,i)=>(<Card_Post postdata={postdata} key={i}/>)) :<></>}
        </div>
    )
}


export default Main_Poste