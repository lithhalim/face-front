import React from "react"

import LayersClearIcon from '@mui/icons-material/LayersClear';
import axios from "axios";
import { useDispatch } from "react-redux";
import { GetAllPostes } from "../../../../../../redux/get-all-postes";


const Delete_Post_Part=({doReport,postdata,mydata})=>{
    const dispatch=useDispatch()

    //delete the post section 
    const deletepost=()=>{
            axios.post(`${process.env.REACT_APP_API}deletePost`,{
                headers:{'Content-Type':'application/json;charset=utf-8'},
                body:{postId:postdata.postId}
            })
            dispatch(GetAllPostes())
            //run the perant to hide the bar to close bar
            doReport()
    }
    
    return(
        <>
                {mydata.role=="admin"||mydata.regusterid==postdata.personDoPostId?
                    <div onClick={deletepost} className="container-specific">
                        <p> Delete Post</p>
                        <span><LayersClearIcon /></span>
                    </div>:<></>
                }

        </>
    )
}


export default Delete_Post_Part