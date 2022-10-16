import React, { useState } from 'react';

//material ui combonants
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//connection import section
import io from "socket.io-client"
import AddFrinfFromAllFrind from './Card-combonants/Add-AllUser';
import RemoveFrendFromAllFrend from './Card-combonants/Remove-AllUser';
import AcceptFrendRequst from './Card-combonants/Add-FrendRequest';
import RemoveFrindRequest from './Card-combonants/Remove-FrendRequest';




let mydata
//local storage element section
if(window.localStorage.mydata){
     mydata=JSON.parse(window.localStorage.mydata)
}

const MyCard=({data})=>{
    
    const [state,setstate]=useState(data.main)

    //use to set the value for set state
        const callBackToSetValueSetState=(data)=>{
            setstate(data)
        }

    
    return(
        <>{
            state.status!=="remove"?
            <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                    component="img"
                    alt="profile photo"
                    height="140"
                    image={state.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {state.fullName}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button onClick={soketiosec} datatype={state.regusterid}>soket io</Button> */}
                    {data.type=="allfrend"?<AddFrinfFromAllFrind data={data} mydata={mydata}  alldata={callBackToSetValueSetState}/>:<></>}
                    {data.type=="allfrend"? <RemoveFrendFromAllFrend  data={data} mydata={mydata}  alldata={callBackToSetValueSetState}/>:<></>}
                    {data.type=="frendrequest"?<AcceptFrendRequst  data={data} mydata={mydata}  alldata={callBackToSetValueSetState} />:<></>}
                    {data.type=="frendrequest"?<RemoveFrindRequest  data={data} mydata={mydata}  alldata={callBackToSetValueSetState}/>:<></>}
                    {data.type=="myfrend"? <Button size="small"  datatype={state.PersonSendFrendRequest}  >Remove Frendship</Button>:<></>}
                </CardActions>
            </Card>
        :<></>
        }

        </>
    )
}


export default MyCard