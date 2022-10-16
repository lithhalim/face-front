import React, { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { GetAllUserData } from "../../../redux/GetAllInfromationUser"
//style import 
import "../Frend4-Styleeeeeeeeeee/frind.scss"
import MyCard from "../CARD"



const MyFrend=()=>{
    const myfrind=useSelector((state)=>(state.alluserdata.value))
    const dispatch=useDispatch()

    let myfrind_data
    if(myfrind!==false){
        myfrind_data=myfrind.payload.data[0].frinds
        let dublicate_myfrind=[]
        let select_mufrind=[]
        //remove the dublicate data from my data
        for(let i=0;i<myfrind_data.length;i++){
            if(!dublicate_myfrind.includes(myfrind_data[i].myfrindid)){
                select_mufrind.push(myfrind_data[i])
                dublicate_myfrind.push(myfrind_data[i].myfrindid)
            }
        }
        myfrind_data=select_mufrind

        
    }


    //get frind of the user from redux
    useEffect(()=>{
        dispatch((GetAllUserData()))    
    },[])


    return(
        <>
        <div className="allfrindcontainer">
           {myfrind_data!==undefined?myfrind_data.map((element,i)=>(
                <MyCard   key={i} data={{type:"myfrend",main:element}}/>))
            :<></>}
        </div>
        </>

    )
}


export default MyFrend