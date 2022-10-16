import React from "react"

import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LanguageIcon from '@mui/icons-material/Language';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DomainIcon from '@mui/icons-material/Domain';


const Edite_personal_page=({personal_data})=>{
    const {study,socialSituation,place,phoneNumber,languageSpeak,gender,email}=personal_data
    const Navi=useNavigate()

    const editeInformation=()=>{
        Navi("/editeInformation")
    }

    return(
        <>
            <div className="edite-personale-page">
                <h1>All Information</h1>
                <ul className="container-element">
                     <li>
                        <AlternateEmailIcon/>
                        <div>Email Address :<p className="value-text">{email}</p></div>
                    </li>

                    <li>
                        <AccountBalanceIcon/>
                        <div>Study Major :<p className="value-text">{study}</p></div>
                    </li>
                    <li>
                        <SocialDistanceIcon/>
                        <div>Social Situation :<p className="value-text">{socialSituation}</p></div>
                    </li>
                    <li>
                        <LanguageIcon/>
                        <div>Language Speake :<p className="value-text">{languageSpeak}</p></div>
                    </li>
                    <li>
                        <AccessibilityIcon/>
                        <div>Your Gender Is :<p className="value-text">{gender}</p></div>
                    </li>
                    <li>
                        <PhoneAndroidIcon/>
                        <div>Phone Number :<p className="value-text">{phoneNumber}</p></div>
                    </li>
                    <li>
                        <DomainIcon/>
                        <div>Place Where Live :<p className="value-text">{place}</p></div>
                    </li>



                </ul>
                <Button variant="outlined" sx={{width:"100%",marginBottom:"10px" }}  onClick={editeInformation}>Edit details</Button>
                <Button variant="outlined" sx={{width:"100%" }} onClick={editeInformation}>add hobbies</Button>
            </div>
    </>
    )
}

export default Edite_personal_page