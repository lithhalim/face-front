import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

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
export const GetAllUserData = createAsyncThunk(
    'alluserdata/GetAllUserData',
    //userid to send argement with calling function
    async (arrgement, thunkAPI) => {
      let data
      arrgement===undefined?data=await axios.get(`${process.env.REACT_APP_API}user/${mydata.regusterid}`):
      data=await axios.get(`${process.env.REACT_APP_API}user/${arrgement}`)      
    return data
    }
  )
  

//the data will come here will shere with all page
export const alluserdata = createSlice({
  name: 'alluserdata',
  initialState,
  reducer:{

  },
  //extraReducer Use to Shaer the Information but the fetching information
  extraReducers:{
    //the data will have 3 state fulfiled for sucses and reject for reject and payload
      [GetAllUserData.fulfilled]:(state,action)=>{
          state.value=action
      },
      [GetAllUserData.rejected]:(state,action)=>{
        state.value=action
      }
  }
})


export default alluserdata.reducer