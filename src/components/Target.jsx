import React, { useEffect, useState } from 'react'

// Target.js
function Target({start, target, setTarget}) {
    
    useEffect(() => {
        const random = Math.floor(Math.random() * 100) + 1
        setTarget(random / 10)
    }, [start])
    
    return (
      <div>
          <h1 className='heading'>Target : {target.toFixed(1)}</h1>
      </div>
    )
}

export default Target