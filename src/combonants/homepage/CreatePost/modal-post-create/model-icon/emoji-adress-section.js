import React,{useState} from "react";
import MoodIcon from '@mui/icons-material/Mood';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

//emoji
import Picker from 'emoji-picker-react';


const Emoji_Addres_section=({emoje_add})=>{
    const [show_emoji,setShow_emoji]=useState(false)



    const onEmojiClick = (event, emojiObject) => {
      emoje_add(emojiObject)
    };

    //show the emoji or not
    const showemoji=()=>{
        show_emoji==false?setShow_emoji(true):setShow_emoji(false)
    }

    return(
        <>
                <AddLocationAltIcon/>
                <MoodIcon sx={{color:"yellow" ,cursor:"pointer"}} onClick={showemoji}/>
                {
                    show_emoji==true?                       
                    <div className="emoje">
                        <Picker onEmojiClick={onEmojiClick} />
                    </div>:<></>
                }

        </>
    )
}

export default Emoji_Addres_section