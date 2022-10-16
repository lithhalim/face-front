import React, { useContext, useEffect } from 'react';
import SubjectIcon from '@mui/icons-material/Subject';
import "./style/style.scss";
import Moment from 'react-moment';
import Person_Nav_Card from './header-image-text/card1-person-information-bar';
import { useState } from 'react';
import { RegusterId_Create_Context } from '../../../context-api/personal-page';
import { useNavigate } from 'react-router';


function Header_card({postdata}) {
  const {publisherImage,publisherName,createdAt,personDoPostId}=postdata;
  const [showItem,setshowItem]=useState(false);
  const RegusterId_Context=useContext(RegusterId_Create_Context);
  const Navi=useNavigate()


  const doReport=()=>{
    setshowItem(false)
  }

  const showTheItem=()=>{
    showItem==false?setshowItem(true):setshowItem(false)
  }

  const gotopersonal_Page=(e)=>{
    RegusterId_Context.setRegusterId(e.currentTarget.getAttribute("datatype"))
    window.localStorage.saveReguster=e.currentTarget.getAttribute("datatype");
    Navi("/personalPage")
  }



  return (
    <div className='header-card-conrtainer'>
        <div className='left-side'>
            <span onClick={gotopersonal_Page} datatype={personDoPostId} style={{cursor:"pointer"}}>
                <img src={publisherImage} alt="" />
            </span>
            <div className='text-section'>
                <p className='name-publisher'>{publisherName}</p>
                <p className='time'><Moment fromNow ago>{createdAt}</Moment></p>
            </div>
        </div>
        <span className='right-side-button'>
            <span onClick={showTheItem}><SubjectIcon/></span>
            {showItem===true?<Person_Nav_Card  postdata={postdata} doReport={doReport}/>:<></>}
        </span>

    </div>
  )
}

export default Header_card
