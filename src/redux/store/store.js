import { configureStore } from '@reduxjs/toolkit'

//the reducer will share  will all combonants
import  alluserdata  from '../GetAllInfromationUser';
import  delete_notification  from '../Delete-Notification';
import getAllPostes from '../get-all-postes';



import  statusVediocall  from '../redux-nofitching/status_vedio_call_accept_or_reject';


export const store = configureStore({
  reducer: {
    alluserdata:alluserdata,
    deleteNotification:delete_notification,
    vediocall:statusVediocall,
    getallpostes:getAllPostes,
  }, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

})

