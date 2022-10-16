import React, { useRef, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router";
import "./varefication.scss";

import {motion} from "framer-motion"

const Verification=()=>{
    const [wrongverecation,setWrongverication]=useState(false)
    const Passwordref=useRef()
    const Navi=useNavigate()
    const [state,setValue]=useState()


    const verify=(e)=>{
        e.preventDefault()
        let verification=`${(Passwordref.current.textvallue1.value)}${(Passwordref.current.textvallue2.value)}${(Passwordref.current.textvallue3.value)}${(Passwordref.current.textvallue4.value)}`
        let email=state

        axios.post(`${process.env.REACT_APP_API}validationcheck`,{
            headers:{'Content-Type':'application/json;charset=utf-8'},
            body:{verification:verification,email:email}
        }).then((data)=>{
            if(data.data=="wrong verify"){
                setWrongverication(true)
            }
            else{
                Navi("/")
            }
        }).catch((err)=>{
          console.log(err)
        })



    }
    return(
        <>
        <motion.div div  className="varefication-container" initial={{x:-2000}} animate={{x:0}} transition={{duration:.5}}>
              <div  className="verification-inner">
                  <h3>Verification Code</h3>
                  <p className="text-specif">We have sent 4 length verification code , enter it on below entry</p>
                  <input className="email" label="Email"  placeholder="email" onChange={(e) => setValue(e.target.value)}/>
                  <form id="form" ref={Passwordref}>
                      <div className="holder-input">
                          <input type="text" name="textvallue1" placeholder="-" className="input-number"/>
                          <input type="text" name="textvallue2" placeholder="-" className="input-number"/>
                          <input type="text" name="textvallue3" placeholder="-" className="input-number"/>
                          <input type="text" name="textvallue4" placeholder="-" className="input-number"/>
                      </div>
                      <button className="verefy" onClick={verify}>Verify</button>
                  </form>                
              </div>
        </motion.div>
        {wrongverecation==true? <p className="wrong-varification">Wrong Varification</p>:<></> }
        </>
    )
}


export default Verification



