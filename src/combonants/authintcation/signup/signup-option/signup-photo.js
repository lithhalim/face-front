import React, { useState } from "react"


import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from "axios";

import {MdAddAPhoto} from "react-icons/md"

const Input = styled('input')({
  display: 'none',
});


const SignupPhoto=({data})=>{
    const [showImage,setShowImage]=useState()


    const getImage_file=async(e)=>{
        //get the file i will uolodad
        let file=e.target.files[0]

        //create new Form data to can upload on cloudaniry
        const formData = new FormData();

        formData.append("file",file);
        //Upload presets {"lobdevu9"} from cloudinary for unsiged name 
        formData.append('upload_preset', 'lobdevu9');
        
        //upload the data on cloudnary https://api.cloudinary.com/v1_1/{cloud name}/upload
       const uploadOnClodinary=await axios.post("https://api.cloudinary.com/v1_1/dhcqosl5z/upload",formData).then((alldata)=>{
        setShowImage(alldata.data.secure_url)

        //send the value for perant
        data(alldata.data.secure_url)
       })

    }    

   
    return(
        <>
            <Stack direction="row" alignItems="center" spacing={2} >
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file"  onChange={getImage_file} />
                    <Button variant="contained" component="span" sx={{width:"200px", marginLeft:"40px",marginBottom:"20px",backgroundColor:"rgb(75, 75, 197)"}} >
                      Upload
                      <MdAddAPhoto style={{fontSize:"1.5em",marginLeft:"5px"}}/>
                    </Button>
                </label>
                {showImage!==undefined?<img src={showImage} className="show-image-profile"  />:<></>}
                
            </Stack>

        </>
    )
}


export default SignupPhoto