import React, { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { GetAllUserData } from "../../../redux/GetAllInfromationUser" 


//style import 
import "../Frend4-Styleeeeeeeeeee/frind.scss"
import MyCard from "../CARD"


const FrendRequest=()=>{
    //get all frend request from redux
    const frendrequest=useSelector((state)=>(state.alluserdata.value))
    const dispatch=useDispatch()


    let frendrequest_data
    if(frendrequest!==false){
        frendrequest_data=frendrequest.payload.data[0].frendrequests
    }

    //get frind of the user from redux
     useEffect(()=>{
            dispatch((GetAllUserData()))    
    },[])
    

    return(
        <>
        <div className="allfrindcontainer">
           {frendrequest_data!==undefined? frendrequest_data.map((element,i)=>(
            <MyCard   key={i} data={{type:"frendrequest",main:element}}/>)):<></>}
        </div>
        </>

    )
}


export default FrendRequest