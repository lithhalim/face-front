import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { SelectPage_Create_Context } from '../../context-api/select-page';
import "./style/style.scss"



function Movei_file() {

  const [Datause,setDatause]=useState(false);
  const selectPage_context=useContext(SelectPage_Create_Context);


  const getdata=(e)=>{
    const [adult,poster_path,original_title,id,original_language,overview,popularity,release_date,vote_average,vote_count]=e.currentTarget.getAttribute("datatype").split("$$$")
    selectPage_context.setselectPage({adult:adult,poster_path:poster_path,
      original_title:original_title,id:id,original_language:original_language,
      overview:overview,popularity:popularity,release_date:release_date,
      vote_average:vote_average,vote_count:vote_count})
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API2}&language=en-US&page=1`).then((data)=>{
      setDatause(data.data.results)
    })
  },[])



  return (
    <div className='movei-container-section'>
        { Datause!==false? Datause.map(({adult,poster_path,original_title,id,original_language,overview,popularity,release_date,vote_average,vote_count},i)=>(
                    <div className='movei-container'  onClick={getdata}  key={i} datatype={`${adult}$$$${poster_path}$$$${original_title}$$$${id}$$$${original_language}$$$${overview}$$$${popularity}$$$${release_date}$$$${vote_average}$$$${vote_count}`}>
                          <div className='text-information-movei'>
                              <p>{original_title}</p>
                              <p>{release_date}</p>
                              <p>Rating: {vote_average}/10</p>
                          </div>
                          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                    </div>        
               )):<></>
        }
    </div>
  )
}

export default Movei_file
