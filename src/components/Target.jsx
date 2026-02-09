import React, { useEffect, useState } from 'react'

// Target.js
function Target({start, target, setTarget}) {
    const [isChanging, setIsChanging] = useState(false);
    
    useEffect(() => {
        setIsChanging(true);
        const random = Math.floor(Math.random() * 100) + 1
        setTarget(random / 10)
        
        setTimeout(() => setIsChanging(false), 500);
    }, [start])
    
    return (
      <div className="target-container">
        <div className="target-label">TARGET</div>
        <div className={`target-value ${isChanging ? 'target-changing' : ''}`}>
          {target.toFixed(1)}
        </div>
        <div className="target-underline"></div>
      </div>
    )
}

export default Target
