import React, { useState } from "react";


//use to create the context 
export const RegusterId_Create_Context=React.createContext();


export function RegusterId_DataProvider(props) {
    const [RegusterId,setRegusterId]=useState(window.localStorage.saveReguster?window.localStorage.saveReguster:false);

  return (
    <RegusterId_Create_Context.Provider value={{RegusterId,setRegusterId}}>
        {props.children}
    </RegusterId_Create_Context.Provider>
  ) 
}
