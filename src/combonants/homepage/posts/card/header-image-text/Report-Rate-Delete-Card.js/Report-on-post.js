import React from "react"
import SummarizeIcon from '@mui/icons-material/Summarize';




import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)

let mydata
if(window.localStorage.mydata){
    mydata=JSON.parse(window.localStorage.mydata)
}

const Report_On_Post=({postdata,doReport})=>{
    //report on the post
    const repostPost=()=>{
            socket.emit("report-on-post",{postId:postdata.postId,report:postdata.report,personDoPostId:postdata.personDoPostId,publisherImage:postdata.publisherImage,publisherName:postdata.publisherName})
            //run the perant to hide the bar to close bar
            doReport()
    }
    
    return(
        <>
                <div onClick={repostPost} className="container-specific">
                    <p>Report a post</p>
                    <span>
                        <SummarizeIcon />
                    </span>
                </div>
        </>
    )
}

export default Report_On_Post