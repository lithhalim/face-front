import React from "react";


// react icon 
import {AiOutlineHome} from "react-icons/ai";
import {BiGroup} from "react-icons/bi";
import {MdOutlineOndemandVideo} from "react-icons/md";
import {SiHatenabookmark} from "react-icons/si";
import {SiEpicgames} from "react-icons/si";


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from "react-router";
import {BiGame} from "react-icons/bi"

import {BiBadgeCheck} from "react-icons/bi"


const Navbar2=()=>{
    const Navi=useNavigate()
    const [getvalue, setthevalue] = React.useState('/home');
    const handleChange = (event, newValue) => {
      setthevalue(newValue);
      Navi(newValue)
    };

    return(
        <ul className="selectdataneed" >
            <BottomNavigation className="selectItemBackground"  sx={{ width: 600,height:40}}  value={getvalue} onChange={handleChange}>
            <BottomNavigationAction
            className="button-color-section"
                value="/home"
                icon={<AiOutlineHome style={{fontSize:"2em"}}/>}
            />
            <BottomNavigationAction
            className="button-color-section"
                value="/frind"
                icon={<BiGroup  style={{fontSize:"2em"}} />}
            />
            <BottomNavigationAction
            className="button-color-section"
                value="/movies"
                icon={<MdOutlineOndemandVideo  style={{fontSize:"2em"}} />}
            />
            <BottomNavigationAction
            className="button-color-section"
              value="/about"
              icon={<BiBadgeCheck  style={{fontSize:"2em"}}/>} />

            <BottomNavigationAction
              className="button-color-section"
              value="/games"
              icon={<BiGame  style={{fontSize:"2em"}}/>} />

            </BottomNavigation>

            
        </ul>
    )
}

export default Navbar2