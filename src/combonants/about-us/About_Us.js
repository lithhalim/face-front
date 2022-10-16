import React from 'react';
import imageAbout from "../assest/Aboutus.png"
import Card_About from './Card_About';
import "./style/style.scss";
import PeopleData from './data';


import {motion} from 'framer-motion';

function About_Us() {
  return (
    <div className='container-aboutus'>
        <div className='header-section'>
            <motion.img src={imageAbout} alt="" initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:1}} />
            <motion.div className='text-area'  initial={{x:"100vw"}} animate={{x:"0"}} transition={{duration:1}} >
                <h1>Photos <span>For Everyone</span></h1>
                <p>The wonderful project has been completed, which contains many features such as video calls and chat, adding posts, watching movies and many many additions. The goal of the design was the many additions in one integrated and comprehensive site</p>
            </motion.div>
        </div>

        <div className='item-container'>
            <h1 className='header'>OUR TEAM</h1>
            <div className='specific-item'>
                {PeopleData.map((data,i)=>(
                    <Card_About key={i} DataUse={data}/>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default About_Us