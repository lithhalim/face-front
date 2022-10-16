import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



import "../style/navbar.scss"
import { useNavigate } from "react-router";


const FrendNavbar=()=>{
    const Navi=useNavigate()
    const [changestate, setchangestate] = React.useState('/frind');

    const handleChange = (event, newValue) => {  
        Navi(newValue)
        setchangestate(newValue);
      
    };

   
      
    return(
        <div className="frendnavbar">
            <Box >
            <Tabs
                value={changestate}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="primary tabs example"
            >
                <Tab value="/frind" label="Find Friends" />
                <Tab value="/myfrend" label="My Friends" />
                <Tab value="/frendrequest" label="Friend Request" />
            </Tabs>
            </Box>
        </div>
    )
}

export default FrendNavbar



 //set style for box
 const styleNavBarFrend={
    width: '100%',display: "flex",justifyContent: "center",marginLeft:"-50px",
    fontWeight:"bold",backgroundColor: "rgba(192, 192, 192, 0.07)"
}