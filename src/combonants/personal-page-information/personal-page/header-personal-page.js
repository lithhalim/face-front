import React, { useContext } from "react"
import { useNavigate } from "react-router";



import GTranslateIcon from '@mui/icons-material/GTranslate';
import {FcBusinessman} from "react-icons/fc";
import {FcAddressBook} from "react-icons/fc";
import {FcPhoneAndroid} from "react-icons/fc";
import {FcGlobe} from "react-icons/fc";
import {FcEditImage} from "react-icons/fc"
import { RegusterId_Create_Context } from "../../context-api/personal-page";



let mydata
if(window.localStorage.mydata){
  mydata=JSON.parse(window.localStorage.mydata).regusterid
}

const HerderPersonal_page_information=({personal_data})=>{
  console.log(personal_data)
  const {image,fullName,email,languageSpeak,phoneNumber,place,study,frinds,regusterid  }=personal_data
  const Navi=useNavigate();
  const RegusterContext=useContext(RegusterId_Create_Context)

  const editePersonal=(e)=>{
    e.preventDefault();
    Navi("/editeInformation")
  }


  const gotoFrind=(e)=>{
    RegusterContext.setRegusterId(e.currentTarget.getAttribute("datatype"));
    window.localStorage.saveReguster=e.currentTarget.getAttribute("datatype")

    window.location.href="/personalPage"
  }

    return(
      <>
        <div className="personal-page-container">
          <img src={image} alt=""  className="personalImage"/>
          <ul className="collection-text">
            <li>
              <div>
                <span><FcBusinessman style={{fontSize:"1.5em"}}/> </span>
                <p> Full Name : {fullName}</p>
              </div>
              <div>
                <span><FcAddressBook style={{fontSize:"1.5em"}}/> </span>
                <p> Email User : {email}</p>
              </div>
              <div>
                <span><GTranslateIcon style={{fontSize:"1.5em"}}/> </span>
                <p> Language speak : {languageSpeak}</p>
              </div>
            </li>
            <li>
              <div>
                <span><FcPhoneAndroid style={{fontSize:"1.5em"}}/> </span>
                <p> Phone Number : {phoneNumber}</p>
              </div>
              <div>
                <span><FcGlobe style={{fontSize:"1.5em"}}/> </span>
                <p> Country Place : {place}</p>
              </div>
              <div>
                <span><FcEditImage style={{fontSize:"1.5em"}}/> </span>
                <p> Study : {study}</p>
              </div>
            </li>
          </ul>


            <div className="all-frind-container">
              {frinds.length>0?frinds.map(({image,myfrindid},i)=>(
                <div key={i} datatype={myfrindid} onClick={gotoFrind}>
                  <img src={image} alt="" />
                </div>

              )):<></>}

            </div>

            {mydata===regusterid?   
              <button className="button-section" onClick={editePersonal}>
                Edite Personal Information
              </button>:<></>
            }
        </div>
        </>
    )
}


export default HerderPersonal_page_information

