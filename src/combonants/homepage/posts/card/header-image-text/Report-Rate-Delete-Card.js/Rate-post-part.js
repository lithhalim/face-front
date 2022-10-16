import React, { useState } from "react"
import axios from "axios"


import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import { GetAllPostes } from "../../../../../../redux/get-all-postes";


const Rate_Post_Section=({doReport,mydata,postdata})=>{
    const [value, setValue] = useState(0)
    const dispatch=useDispatch()    

        
    //set rate for the post
    const newrate=()=>{
            axios.post(`${process.env.REACT_APP_API}editepost`,{
                headers:{'Content-Type':'application/json;charset=utf-8'},
                body:{value:value,postId:postdata.postId}
            })
            dispatch(GetAllPostes())
            //run the perant to hide the bar to close bar
            doReport()
    }
    
    return(
        <>
            {mydata.role=='editor'?  
                <Box>
                    <p>Rate The Post</p>
                    <Rating value={value}  onChange={(event, newValue) => { setValue(newValue);}}/>
                    <Button variant="text" onClick={newrate} >Submit Rate</Button>
                </Box>
                :<></>
            }

        </>
    )
}

export default Rate_Post_Section