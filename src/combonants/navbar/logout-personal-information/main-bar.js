import React from "react";
import { useNavigate } from "react-router";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Logout_button from "./logout-button";
import { useContext } from "react";
import { RegusterId_Create_Context } from "../../context-api/personal-page";


let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}

const Main_bar_personal_information_logout=()=>{
    const Navi=useNavigate();
    const RegusterId_Context=useContext(RegusterId_Create_Context)
    const go_personal=()=>{
        RegusterId_Context.setRegusterId(mydata.regusterid)
        window.localStorage.saveReguster=mydata.regusterid
        Navi("/personalPage")
    }


    return(
        <div className="personal-informatio-logout">
            <ul className="icon1-personal-container">
                <li  onClick={go_personal}>
                    <p className="show-persnal">Personal </p>
                    <span><PersonIcon/> </span>
                </li>
                <li>
                    <p> Privacy</p>
                    <span><SettingsIcon/></span>
                </li>
                <li>
                    <p>Help Me</p>
                    <span><HelpIcon/></span>
                </li>
                <li>
                    <p>Display  </p>
                    <span><MonetizationOnIcon/></span>
                </li>
                <Logout_button/>
            
            </ul>
        </div>
    )
}


export default Main_bar_personal_information_logout