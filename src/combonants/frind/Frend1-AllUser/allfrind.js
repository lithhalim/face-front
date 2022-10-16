import axios from "axios"
import React, { useEffect, useState } from "react"
//style import 
import "../Frend4-Styleeeeeeeeeee/frind.scss"

import {useDispatch} from "react-redux"
import { GetAllUserData } from "../../../redux/GetAllInfromationUser"



//import combonants 
import MyCard from "../CARD"
//get the data from local storage
let mydata
if(window.localStorage.mydata){
  mydata=JSON.parse(window.localStorage.mydata)
}



const AllFrind=()=>{
    //alluser i have
    const [all_user_data,set_all_user]=useState(false)
    const [Remove_all_User,set_Remove_all_User]=useState(false)

    const dispatch=useDispatch()

    



        //get frind of the user from redux
         useEffect(()=>{
            //get all user are reguster
            axios.get(`${process.env.REACT_APP_API}alluser`).then((all_User)=>(set_all_user(all_User.data)))

            //get all user remove from the all user
            axios.get(`${process.env.REACT_APP_API}removefromallfrind/${mydata.regusterid}`).then((data)=>(set_Remove_all_User(data.data)))

            dispatch((GetAllUserData()))    


        },[])





        let data_Will_Use
        if(all_user_data!==false&&Remove_all_User!==false){
            data_Will_Use=all_user_data.map(({regusterid,image,fullName,email},i)=>{
                //to remove the user account from all frind
                if(regusterid!==mydata.regusterid){
                    //check of remove all frend not empty
                    if(Remove_all_User!==undefined){
                        //check if the remove not includes all user
                        if(!Remove_all_User.includes(regusterid)){
                            return (
                                <MyCard  key={i} data={{main:{regusterid,image,fullName,email},type:"allfrend"}}/>
                            )
                        }    
                    }
                    //if remove from all frend are empty
                    else{
                        return (
                            <MyCard  key={i} data={{main:{regusterid,image,fullName,email},type:"allfrend"}}/>
                        )
                    }



                }
            })


        }
    




    return(
        <>
        <div className="allfrindcontainer">
            {data_Will_Use!==undefined?data_Will_Use:<></>}
        </div>
        </>

    )
}


export default AllFrind



