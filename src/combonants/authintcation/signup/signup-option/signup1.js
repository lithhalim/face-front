

import React, { useState }  from "react"
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//The Decoded File
import axios from 'axios';
//Style Section The Css file And Class Have Style
import logo from "../../../assest/logo.png";
import { v4 as uuidv4 } from 'uuid';
import imageL from "../../../assest/authntication/signup.png"



//import file section 
import SignupCountry from "./signup3-country";
import SignupPhoto from "./signup-photo";
import "../style-signup/signup.scss"


const  SignUp1=()=> {
const Navi=useNavigate();
const id=uuidv4();
const [uploadImage,setUploadImage]=useState();
const [statusEmail,setstatusEmail]=useState(false)
//use to show the error 


const initialValues={
  email: '',
  password:'',
  fullName:''
}


//get the value of country from the chiled  using callback from sognup-photo
  const photodata=(getdata)=>{
    setUploadImage(getdata)
  }


  //data will send to the database
  const Get_AllData = (data) =>{
    const {fullName,email,password}=data;
    const Random4digit = Math.floor(1000 + Math.random() * 9000);

    const alldata={
      regusterid:id,
      fullName:fullName,
      email:email,
      password:password
      ,place:"jordan",
      uploadImage:uploadImage,
      verification:Random4digit
    }

     axios.post(`${process.env.REACT_APP_API}signup`,{
        headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json'      },
        alldata
      }).then().then((x)=>{
      if(x.data.status=="Email Is ok"){
        Navi("/")
      }else if(x.data.status=="Email Is Taken"){
        setstatusEmail(true)
      }
    })
  }  


  //show the image i will useing



  return (
    <div className="container-all-signup">
          <div class="center-signin-section"   >
              <motion.img src={logo} alt="" className="image-forSignin"     initial={{opacity:0}} animate={{opacity:1}}     transition={{ duration: 1 }}/>

                      <Formik
                          initialValues={initialValues}
                          validationSchema={SignupSchema}
                          onSubmit={Get_AllData}
                          >
                          {({ errors, touched }) => (
                              <Form method="post">
                                      <div class="txt_field">
                                          <Field type="text"  name="fullName"  required />
                                              <span></span>
                                          {errors.fullName && touched.fullName ? <div className='error-section'>{errors.fullName}</div> : null}
                                          <label>FullName</label>
                                      </div>

                                      <div class="txt_field">
                                          <Field type="text" required name="email" />
                                              <span></span>
                                          {errors.email && touched.email ? <div className='error-section'>{errors.email}</div> : null}
                                          <label>Email</label>
                                      </div>
                                      <div class="txt_field">
                                          <Field type="password"  name="password"  required />
                                              <span></span>
                                          {errors.password && touched.password ? <div className='error-section'>{errors.password}</div> : null}
                                          <label>Password</label>
                                      </div>

                                      <SignupPhoto data={photodata} />

                                      <motion.input type="submit" value="Sign Up"  whileHover={{scale:1.1 ,    transition: { duration: 1 ,yoyo:Infinity},}}  />
                                      {statusEmail==true? <motion.p   initial={{scale:1}} animate={{scale:1.2}} transition={{duration:1,yoyo:Infinity}} className="verification"  style={{marginLeft:"102px",marginTop:"15px"}}>Email Is Taken</motion.p>:<p></p>}              

                              </Form>

                      )}
                      </Formik>   
                      <p style={{marginBottom:"30px"}}></p>
              </div>


          <div className="right-side">
                <motion.img src={imageL} alt=""  initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:.5}}/>
                <motion.div initial={{y:"-100vh"}} animate={{y:"0px"}} transition={{duration:1.5}}><p>Welcome to our website dedicated to communicating between friends always</p></motion.div>
          </div>


    </div>
  );
}



export default SignUp1


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
  fullName: Yup.string()
  .label('FullName')
  .min(5)
  .max(10)
  .required(),
   });






