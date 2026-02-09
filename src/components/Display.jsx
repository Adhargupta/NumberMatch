import React, { useEffect, useState } from 'react'

function CircularScore({ score, maxScore = 10, size = 200, strokeWidth = 20 }) {
    // Calculate the percentage
    const percentage = (score / maxScore) * 100
    
    // Calculate circle properties
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percentage / 100) * circumference
    
    return (
      <div className="flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background gray circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#ffff"
            strokeWidth={strokeWidth}
          />
          
          {/* Foreground green progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#3385b3"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          
          {/* Score text in center */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="transform rotate-90 origin-center display"
            style={{ fontSize: size / 4 }}
          >
            <tspan className=''>
              {score}
            </tspan>
          </text>
        </svg>
      </div>
    )
  }


// Display.js
function Display({clicked, start,display, setDisplay}) {

    useEffect(() => {
        
        if(clicked){
            return
        } 
        const intervalId = setInterval(() => {
            setDisplay((prev) => {
                if (prev >= 100) {
                    // clearInterval(intervalId);
                    return 0
                }
                return prev + 1;
            });
        }, 100)
        
        return () => clearInterval(intervalId);
    }, [clicked, start]);

    useEffect(() => {
        setDisplay(0);
    }, [start]);
    
    return (
      <div className="heading text-4xl">
        <h1 className="display">
          {/* {(display / 10).toFixed(1)} */}
          <CircularScore score={(display / 10).toFixed(1)} maxScore={10} size={150} strokeWidth={17} />
        </h1>
      </div>
    )
}

export default Display