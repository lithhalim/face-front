import React from "react";
import Button from '@mui/material/Button';
import axios from "axios";



import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)




const Role_update_request=({MyRole_admin_date,FilterRole})=>{

    const acceptRequest=(e)=>{
        let regusterid=(e.currentTarget.getAttribute("datatype")).split(",")[0]
        let role=(e.currentTarget.getAttribute("datatype")).split(",")[1]


        console.log(MyRole_admin_date)
        //use to filter the data after accept or reject
        let FiltertedData=MyRole_admin_date.filter((a)=>(a.regusterid!==regusterid))
        FilterRole(FiltertedData)
        socket.emit("DeleteUpdateRole",{regusterid:regusterid})
        socket.emit("updateuserdata",{regusterid:regusterid,role:role})
        
    }

    
    const rejectRequest=async(e)=>{

        let regusterid=(e.currentTarget.getAttribute("datatype"))

        //use to filter the data after accept or reject
        let FiltertedData=MyRole_admin_date.filter((a)=>(a.regusterid!==regusterid))
        FilterRole(FiltertedData)
        
        socket.emit("DeleteUpdateRole",{regusterid:regusterid})
    
    }
    

    return(
        <>
        <div className="Admin-role-requrst">
        {
            MyRole_admin_date.map(({fullName,regusterid,image,updateRole},i)=>(
                <div className="container"  key={i} style={{marginBottom:"5px"}}>
                <div className="information-section">
                    <img src={image} alt="" />
                    <div className="text-section">
                        <p className="name-part">{fullName}</p>
                        <p>Want Update Role To :- {updateRole}</p>
                    </div>
                </div>
                <div className="select-section">
                    <Button variant="contained" color="success" onClick={acceptRequest} datatype={`${regusterid},${updateRole}`} >
                        Accept
                    </Button>
                    <Button variant="outlined" color="error" onClick={rejectRequest} datatype={regusterid}>
                        Reject
                    </Button>
                </div>
             </div>
            ))
        }
        </div>

        </>
    )
}

export default Role_update_request