import React from "react";
import SignUp1 from "./signup-option/signup1";
import "../signup/style-signup/signup.scss";
import {motion} from "framer-motion"





const Signup=()=>{
    return(
        <motion.div className="signup-container" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            <SignUp1 />
        </motion.div>
    )
}  



  export default Signup