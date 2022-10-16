import React, { useEffect, useRef } from "react";
import Moment from 'react-moment';


import {FcCheckmark} from "react-icons/fc"



let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}


const Massrg_section3=({allmassage,itemShown})=>{
    //use to scroll outomatic to buttom by refreance to elment in the bottom 
    const lastthing=useRef()
    useEffect(()=>{
        lastthing.current?.scrollIntoView();
    },[allmassage])



    
    return(
        <>
            <div className="massage-container"  >
                {allmassage!==undefined?allmassage.map(({createdAt,frindid,fullName,image,myfrindid,text,itemShown},i)=>{
                    if(mydata.regusterid==frindid){
                        return (                  
                                <div className="sender" key={i}>
                                        <div className="text">
                                            <img src={image} alt="" style={{width:"30px",height:"30px",borderRadius:"50px",marginRight:"5px"}} />
                                            <div className="text-container" style={{position:"relative"}}>
                                                <p className="massenger-text">{text}</p>
                                                <p className="time-section"><Moment fromNow>{createdAt}</Moment></p>
                                                 {  (allmassage[allmassage.length-1]?.showmassage==true||itemShown==true)?<p style={{position:"absolute",left:"-40px",bottom:"-13px"}}><FcCheckmark/></p>:<></>}  
                                            </div>
                                        </div>
                                        <p ref={lastthing}></p>
                                </div>)
                    }else{
                        return (                  
                            <div className="sender forme" key={i}>
                                    <div className="text">
                                        <div className="text-container">
                                            <p className="massenger-text" style={{display:"flex",justifyContent:"flex-end"}}>{text}</p>
                                            <p className="time-section"  style={{display:"flex",justifyContent:"flex-end"}}><Moment fromNow>{createdAt}</Moment></p>
                                        </div>
                                        <img src={image} alt="" style={{width:"30px",height:"30px",borderRadius:"50px",marginLeft:"5px"}} />
                                    </div>
                                    <p ref={lastthing}></p>
                            </div>)

                    }
                 })
                :<></>}

                 
            </div>

        </>
    )
}


export default Massrg_section3