import React, { useState } from "react";


//use to create the context 
export const ShowBar_Create_Context=React.createContext();


export function ShwoBar_DataProvider(props) {
    const [showBar,setshowBar]=useState(false);

  return (
    <ShowBar_Create_Context.Provider value={{showBar,setshowBar}}>
        {props.children}
    </ShowBar_Create_Context.Provider>
  ) 
}
