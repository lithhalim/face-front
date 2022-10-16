import React, { useState } from "react";


//use to create the context 
export const Chate_Create_Context=React.createContext();


export function Chate_DataProvider(props) {
    const [chateNotification,setChateNotification]=useState(false);
    const [ChateOpenId,setChateOpenId]=useState(false)




  return (
    <Chate_Create_Context.Provider value={{chateNotification,setChateNotification,ChateOpenId,setChateOpenId}}>
        {props.children}
    </Chate_Create_Context.Provider>
  ) 
}
