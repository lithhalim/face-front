import React from 'react'

function Massage_notification({CustomMassage}) {
    
  return (
    <div className='massage-container-notification'>
        <div className='left-side'>
            <img src={CustomMassage.image} alt="" />
            <div className='text-area'>
                <p>{CustomMassage.text}</p>
                <p>
                    # massage {CustomMassage.number}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Massage_notification