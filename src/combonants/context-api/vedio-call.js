import React, { useState } from "react";


//use to create the context 
export const Vediocall_Create_Context=React.createContext();


export function Vediocall_DataProvider(props) {
    const [AccepterInformation,setAccepterInformation]=useState("");
    const [CallerInformation,setCallerInformation]=useState("")

  return (
    <Vediocall_Create_Context.Provider value={{AccepterInformation,setAccepterInformation,CallerInformation,setCallerInformation}}>
        {props.children}
    </Vediocall_Create_Context.Provider>
  ) 
}
