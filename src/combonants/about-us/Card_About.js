import React from 'react';
import {BsGithub} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import {MdAlternateEmail} from "react-icons/md";

import {motion} from "framer-motion"

function Card_About({DataUse}) {
    const {image,name,github,desc,dataAdd}=DataUse
  return (
    <motion.div className='Card-aboad' initial={{y:"100vh"}} animate={{y:"0px"}} transition={{duration:1}}>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h4>{desc}</h4>
        <p>{dataAdd}</p>
        <ul className='icon-section'>
            <li><a href={github}><BsGithub/></a></li>
            <li><AiFillLinkedin/></li>
            <li><MdAlternateEmail/></li>
        </ul>
    </motion.div>
  )
}

export default Card_About