import * as React from 'react';
import "./style/style.scss"

const Like_Post_Model=({likesdata})=>{

    return (
      <div className='container-like-modal'>
          {
            likesdata.map(({person_do_like_name,person_do_like_image},i)=>(
              <div className='card-like'>
                <img src={person_do_like_image} alt="" />
                <p>{person_do_like_name}</p>
              </div>
            ))
          }
      </div>
    );
  
}

export default Like_Post_Model