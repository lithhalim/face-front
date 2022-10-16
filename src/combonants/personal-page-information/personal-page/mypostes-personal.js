import React from "react"
import Card_Post from "../../homepage/posts/card/card"
const Mypostes_personal=({personal_data})=>{
    return(
        <>
        <div className="postesContainer-section">
            {personal_data.map((postdata,i)=>(<Card_Post postdata={postdata} key={i}/>)) }
        </div>
        </>
    )
}


export default Mypostes_personal