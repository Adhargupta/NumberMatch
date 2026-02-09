import React, { useEffect } from 'react'

function Message({messages, difference, setDifference}) {

  return (
    <div className={`message text-2xl mt-5
    ${difference==0?'text-yellow-700':'text-black'}
    `}>
        {messages?
        difference>=0.2?'Clicked Too Fast 😭':
        difference<0.2 && difference>0?"Too Close 🫣":
        difference==0?'Congratulation You Won 🎉':
        difference<0 && difference>-0.2?"Too Close 🫣":
        difference<-0.2?'Clicked Too Late 😭':null
        :
        null
        }
    </div>
  )
}

export default Message