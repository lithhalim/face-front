import React,{  useState } from "react";

import Emoji_Addres_section from "./model-icon/emoji-adress-section";
import Image_Frend_Icon from "./model-icon/image-frend-section";

const Modal_Text_Icon=({text_value_get,ImagePoster})=>{
    const [text_value,set_text_valiue]=useState("")

    const dataType=(e)=>{
        set_text_valiue(e.target.value)
    }

    //callback to send the text to perant
    text_value_get(text_value)


    //call back get the value of emoji from chiled and set in text
    const emoje_add=(data)=>{
        set_text_valiue(text_value+data.emoji)
    }





    return(
        <>
            <input type="text" className="text-area" placeholder="What You Think About?"  onChange={dataType}/>
            <div className="icon-section-item">
                <div>
                <Image_Frend_Icon ImagePoster={ImagePoster}/>
                <Emoji_Addres_section emoje_add={emoje_add}/>
                </div>
                <p>Add To Your Post</p>
            </div>
        </>
    )
}


export default Modal_Text_Icon