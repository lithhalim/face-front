import React from "react"



const CreatePost_section1=({show,mydata})=>{

const showmodel=()=>{
    show(true)
}

    return(
        <>
            <div className="imagecontainer" onClick={showmodel}>
                <img src={mydata.image} alt="" />
                <input type="text" style={{fontWeight:"bold"}}  placeholder={`What You Think About ${mydata.fullName}`} />
            </div>
        </>
    )
}


export default CreatePost_section1