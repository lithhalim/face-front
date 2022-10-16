//Import React And Main Combonants
import React, { useState }  from "react"
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//The Decoded File
import axios from 'axios';
import jwt_decode from "jwt-decode";

//Style Section The Css file And Class Have Style
import "../signin-style/signin-style.scss";
import logo from "../../../assest/logo.png";


import imageL from "../../../assest/authntication/signin.png"
  
const SignIn=()=>{
    const Navi=useNavigate();
    const [wrongEmailOrPass,setwrongEmailOrPass]=useState(false)
    const [verificationProblem,setVerificationProblem]=useState(false)

    const initialValues={
        email: '',
        password:'',
    }
    
    


    const verifyEmail=()=>{    
        axios.post(`${process.env.REACT_APP_API}Nodemailer`,{
            headers:{'Content-Type':'application/json;charset=utf-8'},
            body:verificationProblem
        })
        Navi("/Verification")
    }


    const Get_AllData = (data) =>{

        //Use To Decoded The Baseic Auth To Be `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
        const decoded=btoa(`${data.email}:${data.password}`)

        axios.post(`${process.env.REACT_APP_API}signin`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json',"authorization":`BASIC ${decoded}` }
          }).then((x)=>{
            //to verify the code 
                    if(x.data.varification=="You Are Not Verify") {
                        setVerificationProblem(x.data)
                        return
                    }
                 if(x.data.accessToken!="There Is Problem In SignIn"&&x.data.varificationPass!=="done"){
                    //send the accsess Token To User To Useit
                    const decoded = jwt_decode(x.data.accessToken);
                    window.localStorage.mydata=JSON.stringify(decoded);
                    window.location.href="/home";
                }                

            }).catch((errors)=>{
                //if The Email Or The Password ARE WRONG
                setwrongEmailOrPass("Wrong Email Or Password")
            });
    
    }

    //To Get Signup Page Direct 
    const signup=()=>{ Navi("/signup")}
    
    return(
        <div className="container-all-signin">
            <div className="left-side">
                <motion.img src={imageL} alt=""  initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:.5}}/>
                <motion.div initial={{y:"-100vh"}} animate={{y:"0px"}} transition={{duration:1.5}}><p>Welcome to our website dedicated to communicating between friends always</p></motion.div>
            </div>
                <motion.div className="signin-all" initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:1}}>
                <motion.div className="container-all" initial={{opacity:0}} animate={{opacity:1}}>
                    <div class="center-signin-section">
                        <motion.img src={logo} alt="" className="image-forSignin"   initial={{opacity:0}} animate={{opacity:1}}     transition={{ duration: 1 }}/>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={SignupSchema}
                                    onSubmit={Get_AllData}
                                    >
                                    {({ errors, touched }) => (
                                        <Form method="post">
                                                <div class="txt_field">
                                                    <Field type="text" required name="email" />
                                                        <span></span>
                                                    {errors.email && touched.email ? <div className='error-section'>{errors.email}</div> : null}
                                                    <label>Username</label>
                                                </div>
                                                <div class="txt_field">
                                                    <Field type="password"  name="password"  required />
                                                        <span></span>
                                                    {errors.password && touched.password ? <div className='error-section'>{errors.password}</div> : null}
                                                    <label>Password</label>
                                                </div>
                                                    <motion.input type="submit" value="Login"  whileHover={{scale:1.1 ,    transition: { duration: 1 ,yoyo:Infinity},}}  />
                                                <div class="singup_link">Not a member? <a style={{cursor:"pointer"}}  onClick={signup}>Singup</a></div>
                                        </Form>
                                )}
                                </Formik>   

                                { verificationProblem!==false? <motion.p   onClick={verifyEmail} initial={{scale:1}} animate={{scale:1.2}} transition={{duration:1,yoyo:Infinity}} className="verification" >Press here To Verify...</motion.p>:<></>}    
                                { wrongEmailOrPass!==false? <motion.p   initial={{scale:1}} animate={{scale:1.2}} transition={{duration:1,yoyo:Infinity}} className="verification" >{wrongEmailOrPass}</motion.p>:<></>}              
                        </div>
                    </motion.div>
                    </motion.div>

        </div>
    )

}


export default SignIn






//you schema style validation 
const SignupSchema = Yup.object().shape({
    email:Yup
      .string()      
      .email("Invalid email format")
      .required("Mail is required"),
    password: Yup.string()
       .label('Password')
       .min(2)
       .max(10)
       .required(),
     });
  

