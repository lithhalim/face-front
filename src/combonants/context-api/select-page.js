import React, { useState } from "react";


//use to create the context 
export const SelectPage_Create_Context=React.createContext();


export function SelectPage_DataProvider(props) {
    const [selectPage,setselectPage]=useState(false);

  return (
    <SelectPage_Create_Context.Provider value={{selectPage,setselectPage}}>
        {props.children}
    </SelectPage_Create_Context.Provider>
  ) 
}
