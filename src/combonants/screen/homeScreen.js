import React,{useEffect, useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import { GetAllUserData } from "../../../redux/GetAllInfromationUser";


import style from "../../style_combonants/Style-combonants";

import "./style/style.scss"

//import combonants
import Masseges_section from "./chate-area/Massege1-container-chate"

import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}




// {onlinefrind} -->app.js get all online frend
const Frend_Connection_Card=({onlinefrind})=>{
    //---------------------------------Get My Frind And Filter Dublicate---------------------------//
    const dispatch=useDispatch()
    const select=useSelector((state)=>((state.alluserdata.value)))
    //to save the value of my frend 

    useEffect(()=>{
        dispatch(GetAllUserData(mydata.regusterid))

    },[socket])



    //get all my frind and filter dublicate item 
    let myfrendm
    if(select!==false){
            let dublicate_myfrind=[]
            let select_mufrind=[]
            myfrendm=(select.payload.data[0].frinds)
            //remove the dublicate data from my data
            for(let i=0;i<myfrendm.length;i++){
                if(!dublicate_myfrind.includes(myfrendm[i].myfrindid)){
                    select_mufrind.push(myfrendm[i])
                    dublicate_myfrind.push(myfrendm[i].myfrindid)
                }
            }
            myfrendm=select_mufrind
    }
    



        //------------------------------------open or close the massenger--------------------------------// 
        //open or closhe the massenger section
        const [massanger,setmassenger]=useState(false)

        //state of the massenger close or open 
        const [chate_status_open_or_close,setchate_status_open_or_close]=useState(false)

        //get statemassenger from massage1 when press x close chate
        const statemassenger=(data)=>{
            setmassenger(data)
            setchate_status_open_or_close(false)
        }



        // when you click on person want to chat with him 
        const massenger=(data)=>{
            //get the information of the person will chat with me 
            setchate_status_open_or_close(true)
            let [chatId,fullName,image,myfrindid,frindid]=data.currentTarget.getAttribute("data").split(",")
            setmassenger({chatId:chatId,fullName:fullName,image:image,myfrindid:myfrindid,frindid:frindid})
        }


    

        let DataPrented
        if(onlinefrind!==undefined&&myfrendm!==undefined){
            DataPrented=myfrendm.map(({fullName,image,myfrindid,chatId,frindid},i)=>{
                //check if the online user is one from the
                if(onlinefrind.includes(myfrindid)){
                    return( <div className="person" data={`${chatId},${fullName},${image},${myfrindid},${frindid}`} onClick={massenger} key={i} >
                                <img src={image} alt="" style={style.image_profole} />
                                <p>{fullName}</p>
                                <p className="active" ></p>
                            </div>)
                }else{
                    return( <div className="person" data={`${chatId},${fullName},${image},${myfrindid},${frindid}`} onClick={massenger} key={i}>
                                <img src={image} alt="" style={style.image_profole} />
                                <p>{fullName}</p>
                                <p className="notactive"></p>
                            </div>)
                }
    
            })    
        }
    


    return(
        <>
            {DataPrented!==undefined?DataPrented:<></>}
            <Masseges_section massanger={massanger} statemassenger={statemassenger} chate_status_open_or_close={chate_status_open_or_close}/>
        </>
    )
}


export default Frend_Connection_Card