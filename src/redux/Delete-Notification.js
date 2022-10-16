import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

import io from "socket.io-client"
const socket=io(process.env.REACT_APP_API)



//initial value 
const initialState = {
  value: false
}

let mydata
//the data from local storage
if((window.localStorage.mydata)){
     mydata=JSON.parse(window.localStorage.mydata);

}




//function we will invoke to fetch the data
export const Delete_Notification = createAsyncThunk(
    'deleteNotification/Delete_Notification',
    //userid to send argement with calling function
    async (userid, thunkAPI) => {
      socket.emit("delete-notofication",{state:userid,regusterid:mydata.regusterid})
    }
  )
  

//the data will come here will shere with all page
export const delete_notification = createSlice({
  name: 'deleteNotification',
  initialState,
  reducer:{

  },
  //extraReducer Use to Shaer the Information but the fetching information
  extraReducers:{
    //the data will have 3 state fulfiled for sucses and reject for reject and payload
      [Delete_Notification.fulfilled]:(state,action)=>{
          state.value=action
      },
      [Delete_Notification.rejected]:(state,action)=>{
        state.value=action
      }
  }
})


export default delete_notification.reducer