import React, { useRef } from "react"

const Edote_Work_IInformation=()=>{

    return(
        <>
             <div className="container-item">
                    <select name="user_job" className="icon1-input">
                        <option value="writer" key="">Writer</option>
                        <option value="editor" key="">Editor</option>
                        <option value="user" key="">User</option>
                    </select>
            </div>


            <div className="container-item">
                <input  className="icon1-input" type="text" id="place" name="languageSpeak" placeholder="country"/>
            </div>

            <div className="container-item">
                <input  className="icon1-input" type="text" id="place" name="place" placeholder="Country"/>
            </div>

            <div className="container-item">
                <select  className="icon1-input" id="job" name="study">
                    <optgroup label="Web">
                    <option value="frontend_developer">Front-End Developer</option>
                    <option value="php_developer">PHP Developer</option>
                    <option value="python_developer">Python Developer</option>
                    <option value="rails_developer">Rails Developer</option>
                    <option value="web_designer">Web Designer</option>
                    <option value="wordpress_developer">Wordpress Developer</option>
                    </optgroup>
                    <optgroup label="Mobile">
                    <option value="android_developer">Android Developer</option>
                    <option value="ios_developer">IOS Developer</option>
                    <option value="mobile_designer">Mobile Designer</option>
                    </optgroup>
                    <optgroup label="Business">
                    <option value="business_owner">Business Owner</option>
                    <option value="freelancer">Freelancer</option>
                    </optgroup>
                </select>
            </div>



            <div className="container-item">
                <select className="icon1-input" name="socialSituation">
                    <option value="marid" key="">Married</option>
                    <option value="single" key="">Single</option>
                </select>
            </div>

        </>
    )
}


export default Edote_Work_IInformation