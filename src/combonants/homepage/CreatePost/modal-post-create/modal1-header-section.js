import React from "react"


const Modal_Header_Section=({mydata})=>{
    return(
        <>
        <div className="module-image-container">
            <img src={mydata.image} alt="" />
            <p>{mydata.fullName}</p>
        </div>
        </>
    )
}

export default Modal_Header_Section