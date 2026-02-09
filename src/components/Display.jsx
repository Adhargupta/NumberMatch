import React, { useEffect, useState } from 'react'

function CircularScore({ score, maxScore = 10, size = 200, strokeWidth = 20 }) {
    // Calculate the percentage
    const percentage = (score / maxScore) * 100
    
    // Calculate circle properties
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percentage / 100) * circumference
    
    return (
      <div className="circular-score-wrapper" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="circular-svg">
          {/* Outer glow ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius + 8}
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="3"
            opacity="0.3"
            className="glow-ring"
          />
          
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth={strokeWidth}
          />
          
          {/* Foreground progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="progress-circle"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(51, 133, 179, 0.6))'
            }}
          />
          
          {/* Inner glow circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth - 5}
            fill="url(#innerGlow)"
            opacity="0.4"
          />
          
          {/* Score text in center */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-text"
            style={{ fontSize: size / 3.5 }}
          >
            {score}
          </text>
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#3385b3" />
              <stop offset="100%" stopColor="#0099cc" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#3385b3" />
            </linearGradient>
            <radialGradient id="innerGlow">
              <stop offset="0%" stopColor="#3385b3" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#003341" stopOpacity="0" />
            </radialGradient>
          </defs>
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
      <div className="display-container">
        <div className="pulse-ring"></div>
        <CircularScore score={(display / 10).toFixed(1)} maxScore={10} size={180} strokeWidth={18} />
      </div>
    )
}

export default Display
