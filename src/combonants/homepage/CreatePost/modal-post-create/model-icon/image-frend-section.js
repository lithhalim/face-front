import React, { useState } from "react"
//material ui icon 
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from "axios";



const Image_Frend_Icon=({ImagePoster})=>{
    const [showImage,setShowImage]=useState(false)


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

        //send the image to the perant
        ImagePoster(alldata.data.secure_url)
       })

    }


    return(
        <>
            {showImage!==false?<img src={showImage} alt="" className="show-image-poster"  />:<></>}
            <IconButton color="primary" aria-label="upload picture" component="label" sx={{marginBottom:"15px"}}>
                <input hidden accept="image/*" type="file" onChange={getImage_file} />
                <PhotoCamera />
            </IconButton>

            <GroupAddIcon sx={{color:"green"}}/> 
        </>
    )
}

export default Image_Frend_Icon